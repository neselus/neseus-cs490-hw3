import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import _someInstanceProperty from "@babel/runtime-corejs3/core-js/instance/some";
import { AuthenticationError, ForbiddenError, context } from '@redwoodjs/graphql-server';
import { db } from "./db";

/**
 * The session object sent in as the first argument to getCurrentUser() will
 * have a single key `id` containing the unique ID of the logged in user
 * (whatever field you set as `authFields.id` in your auth function config).
 * You'll need to update the call to `db` below if you use a different model
 * name or unique field name, for example:
 *
 *   return await db.profile.findUnique({ where: { email: session.id } })
 *                   ───┬───                       ──┬──
 *      model accessor ─┘      unique id field name ─┘
 *
 * !! BEWARE !! Anything returned from this function will be available to the
 * client--it becomes the content of `currentUser` on the web side (as well as
 * `context.currentUser` on the api side). You should carefully add additional
 * fields to the `select` object below once you've decided they are safe to be
 * seen if someone were to open the Web Inspector in their browser.
 */
export const getCurrentUser = async session => {
  return await db.user.findUnique({
    where: {
      id: session.id
    },
    select: {
      id: true,
      email: true,
      roles: true
    }
  });
};

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = () => {
  return !!context.currentUser;
};

/**
 * When checking role membership, roles can be a single value, a list, or none.
 * You can use Prisma enums too (if you're using them for roles), just import your enum type from `@prisma/client`
 */

/**
 * Checks if the currentUser is authenticated (and assigned one of the given roles)
 *
 * @param roles: {@link AllowedRoles} - Checks if the currentUser is assigned one of these roles
 *
 * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
 * or when no roles are provided to check against. Otherwise returns false.
 */
export const hasRole = roles => {
  if (!isAuthenticated()) {
    return false;
  }
  const currentUserRoles = context.currentUser?.roles;
  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      // roles to check is a string, currentUser.roles is a string
      return currentUserRoles === roles;
    } else if (_Array$isArray(currentUserRoles)) {
      // roles to check is a string, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => roles === allowedRole);
    }
  }
  if (_Array$isArray(roles)) {
    if (_Array$isArray(currentUserRoles)) {
      // roles to check is an array, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => _includesInstanceProperty(roles).call(roles, allowedRole));
    } else if (typeof currentUserRoles === 'string') {
      // roles to check is an array, currentUser.roles is a string
      return _someInstanceProperty(roles).call(roles, allowedRole => currentUserRoles === allowedRole);
    }
  }

  // roles not found
  return false;
};

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param roles: {@link AllowedRoles} - When checking role membership, these roles grant access.
 *
 * @returns - If the currentUser is authenticated (and assigned one of the given roles)
 *
 * @throws {@link AuthenticationError} - If the currentUser is not authenticated
 * @throws {@link ForbiddenError} If the currentUser is not allowed due to role permissions
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = ({
  roles
} = {}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.");
  }
  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvbkVycm9yIiwiRm9yYmlkZGVuRXJyb3IiLCJjb250ZXh0IiwiZGIiLCJnZXRDdXJyZW50VXNlciIsInNlc3Npb24iLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJzZWxlY3QiLCJlbWFpbCIsInJvbGVzIiwiaXNBdXRoZW50aWNhdGVkIiwiY3VycmVudFVzZXIiLCJoYXNSb2xlIiwiY3VycmVudFVzZXJSb2xlcyIsIl9BcnJheSRpc0FycmF5Iiwic29tZSIsImFsbG93ZWRSb2xlIiwiX2luY2x1ZGVzSW5zdGFuY2VQcm9wZXJ0eSIsImNhbGwiLCJfc29tZUluc3RhbmNlUHJvcGVydHkiLCJyZXF1aXJlQXV0aCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvbGliL2F1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aGVudGljYXRpb25FcnJvciwgRm9yYmlkZGVuRXJyb3IgfSBmcm9tICdAcmVkd29vZGpzL2dyYXBocWwtc2VydmVyJ1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZGInXG5cbi8qKlxuICogVGhlIHNlc3Npb24gb2JqZWN0IHNlbnQgaW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGdldEN1cnJlbnRVc2VyKCkgd2lsbFxuICogaGF2ZSBhIHNpbmdsZSBrZXkgYGlkYCBjb250YWluaW5nIHRoZSB1bmlxdWUgSUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gKiAod2hhdGV2ZXIgZmllbGQgeW91IHNldCBhcyBgYXV0aEZpZWxkcy5pZGAgaW4geW91ciBhdXRoIGZ1bmN0aW9uIGNvbmZpZykuXG4gKiBZb3UnbGwgbmVlZCB0byB1cGRhdGUgdGhlIGNhbGwgdG8gYGRiYCBiZWxvdyBpZiB5b3UgdXNlIGEgZGlmZmVyZW50IG1vZGVsXG4gKiBuYW1lIG9yIHVuaXF1ZSBmaWVsZCBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgIHJldHVybiBhd2FpdCBkYi5wcm9maWxlLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi5pZCB9IH0pXG4gKiAgICAgICAgICAgICAgICAgICDilIDilIDilIDilKzilIDilIDilIAgICAgICAgICAgICAgICAgICAgICAgIOKUgOKUgOKUrOKUgOKUgFxuICogICAgICBtb2RlbCBhY2Nlc3NvciDilIDilJggICAgICB1bmlxdWUgaWQgZmllbGQgbmFtZSDilIDilJhcbiAqXG4gKiAhISBCRVdBUkUgISEgQW55dGhpbmcgcmV0dXJuZWQgZnJvbSB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIHRvIHRoZVxuICogY2xpZW50LS1pdCBiZWNvbWVzIHRoZSBjb250ZW50IG9mIGBjdXJyZW50VXNlcmAgb24gdGhlIHdlYiBzaWRlIChhcyB3ZWxsIGFzXG4gKiBgY29udGV4dC5jdXJyZW50VXNlcmAgb24gdGhlIGFwaSBzaWRlKS4gWW91IHNob3VsZCBjYXJlZnVsbHkgYWRkIGFkZGl0aW9uYWxcbiAqIGZpZWxkcyB0byB0aGUgYHNlbGVjdGAgb2JqZWN0IGJlbG93IG9uY2UgeW91J3ZlIGRlY2lkZWQgdGhleSBhcmUgc2FmZSB0byBiZVxuICogc2VlbiBpZiBzb21lb25lIHdlcmUgdG8gb3BlbiB0aGUgV2ViIEluc3BlY3RvciBpbiB0aGVpciBicm93c2VyLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoc2Vzc2lvbikgPT4ge1xuICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi5pZCB9LFxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgZW1haWw6IHRydWUsIHJvbGVzOiB0cnVlIH0sXG4gIH0pXG59XG5cbi8qKlxuICogVGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZCBpZiB0aGVyZSBpcyBhIGN1cnJlbnRVc2VyIGluIHRoZSBjb250ZXh0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gSWYgdGhlIGN1cnJlbnRVc2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpID0+IHtcbiAgcmV0dXJuICEhY29udGV4dC5jdXJyZW50VXNlclxufVxuXG4vKipcbiAqIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCByb2xlcyBjYW4gYmUgYSBzaW5nbGUgdmFsdWUsIGEgbGlzdCwgb3Igbm9uZS5cbiAqIFlvdSBjYW4gdXNlIFByaXNtYSBlbnVtcyB0b28gKGlmIHlvdSdyZSB1c2luZyB0aGVtIGZvciByb2xlcyksIGp1c3QgaW1wb3J0IHlvdXIgZW51bSB0eXBlIGZyb20gYEBwcmlzbWEvY2xpZW50YFxuICovXG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkIChhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcylcbiAqXG4gKiBAcGFyYW0gcm9sZXM6IHtAbGluayBBbGxvd2VkUm9sZXN9IC0gQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhc3NpZ25lZCBvbmUgb2YgdGhlc2Ugcm9sZXNcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnRVc2VyIGlzIGxvZ2dlZCBpbiBhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcyxcbiAqIG9yIHdoZW4gbm8gcm9sZXMgYXJlIHByb3ZpZGVkIHRvIGNoZWNrIGFnYWluc3QuIE90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICovXG5leHBvcnQgY29uc3QgaGFzUm9sZSA9IChyb2xlcykgPT4ge1xuICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBjdXJyZW50VXNlclJvbGVzID0gY29udGV4dC5jdXJyZW50VXNlcj8ucm9sZXNcblxuICBpZiAodHlwZW9mIHJvbGVzID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgY3VycmVudFVzZXJSb2xlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGEgc3RyaW5nLCBjdXJyZW50VXNlci5yb2xlcyBpcyBhIHN0cmluZ1xuICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyUm9sZXMgPT09IHJvbGVzXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRVc2VyUm9sZXMpKSB7XG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhIHN0cmluZywgY3VycmVudFVzZXIucm9sZXMgaXMgYW4gYXJyYXlcbiAgICAgIHJldHVybiBjdXJyZW50VXNlclJvbGVzPy5zb21lKChhbGxvd2VkUm9sZSkgPT4gcm9sZXMgPT09IGFsbG93ZWRSb2xlKVxuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHJvbGVzKSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRVc2VyUm9sZXMpKSB7XG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhbiBhcnJheSwgY3VycmVudFVzZXIucm9sZXMgaXMgYW4gYXJyYXlcbiAgICAgIHJldHVybiBjdXJyZW50VXNlclJvbGVzPy5zb21lKChhbGxvd2VkUm9sZSkgPT5cbiAgICAgICAgcm9sZXMuaW5jbHVkZXMoYWxsb3dlZFJvbGUpXG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3VycmVudFVzZXJSb2xlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGFuIGFycmF5LCBjdXJyZW50VXNlci5yb2xlcyBpcyBhIHN0cmluZ1xuICAgICAgcmV0dXJuIHJvbGVzLnNvbWUoKGFsbG93ZWRSb2xlKSA9PiBjdXJyZW50VXNlclJvbGVzID09PSBhbGxvd2VkUm9sZSlcbiAgICB9XG4gIH1cblxuICAvLyByb2xlcyBub3QgZm91bmRcbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogVXNlIHJlcXVpcmVBdXRoIGluIHlvdXIgc2VydmljZXMgdG8gY2hlY2sgdGhhdCBhIHVzZXIgaXMgbG9nZ2VkIGluLFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgYXNzaWduZWQgYSByb2xlLCBhbmQgb3B0aW9uYWxseSByYWlzZSBhblxuICogZXJyb3IgaWYgdGhleSdyZSBub3QuXG4gKlxuICogQHBhcmFtIHJvbGVzOiB7QGxpbmsgQWxsb3dlZFJvbGVzfSAtIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCB0aGVzZSByb2xlcyBncmFudCBhY2Nlc3MuXG4gKlxuICogQHJldHVybnMgLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgYXV0aGVudGljYXRlZCAoYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXMpXG4gKlxuICogQHRocm93cyB7QGxpbmsgQXV0aGVudGljYXRpb25FcnJvcn0gLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcbiAqIEB0aHJvd3Mge0BsaW5rIEZvcmJpZGRlbkVycm9yfSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGFsbG93ZWQgZHVlIHRvIHJvbGUgcGVybWlzc2lvbnNcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWR3b29kanMvcmVkd29vZC90cmVlL21haW4vcGFja2FnZXMvYXV0aCBmb3IgZXhhbXBsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlcXVpcmVBdXRoID0gKHsgcm9sZXMgfSA9IHt9KSA9PiB7XG4gIGlmICghaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICB0aHJvdyBuZXcgQXV0aGVudGljYXRpb25FcnJvcihcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gZG8gdGhhdC5cIilcbiAgfVxuXG4gIGlmIChyb2xlcyAmJiAhaGFzUm9sZShyb2xlcykpIHtcbiAgICB0aHJvdyBuZXcgRm9yYmlkZGVuRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gZG8gdGhhdC5cIilcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFTQSxtQkFBbUIsRUFBRUMsY0FBYyxFQWtDakNDLE9BQU8sUUFsQ2tDLDJCQUEyQjtBQUUvRSxTQUFTQyxFQUFFOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxPQUFPLElBQUs7RUFDL0MsT0FBTyxNQUFNRixFQUFFLENBQUNHLElBQUksQ0FBQ0MsVUFBVSxDQUFDO0lBQzlCQyxLQUFLLEVBQUU7TUFBRUMsRUFBRSxFQUFFSixPQUFPLENBQUNJO0lBQUcsQ0FBQztJQUN6QkMsTUFBTSxFQUFFO01BQUVELEVBQUUsRUFBRSxJQUFJO01BQUVFLEtBQUssRUFBRSxJQUFJO01BQUVDLEtBQUssRUFBRTtJQUFLO0VBQy9DLENBQUMsQ0FBQztBQUNKLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBTUMsZUFBZSxHQUFHQSxDQUFBLEtBQU07RUFDbkMsT0FBTyxDQUFDLENBQUNYLE9BQU8sQ0FBQ1ksV0FBVztBQUM5QixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQU1DLE9BQU8sR0FBSUgsS0FBSyxJQUFLO0VBQ2hDLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUMsRUFBRTtJQUN0QixPQUFPLEtBQUs7RUFDZDtFQUVBLE1BQU1HLGdCQUFnQixHQUFHZCxPQUFPLENBQUNZLFdBQVcsRUFBRUYsS0FBSztFQUVuRCxJQUFJLE9BQU9BLEtBQUssS0FBSyxRQUFRLEVBQUU7SUFDN0IsSUFBSSxPQUFPSSxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7TUFDeEM7TUFDQSxPQUFPQSxnQkFBZ0IsS0FBS0osS0FBSztJQUNuQyxDQUFDLE1BQU0sSUFBSUssY0FBQSxDQUFjRCxnQkFBZ0IsQ0FBQyxFQUFFO01BQzFDO01BQ0EsT0FBT0EsZ0JBQWdCLEVBQUVFLElBQUksQ0FBRUMsV0FBVyxJQUFLUCxLQUFLLEtBQUtPLFdBQVcsQ0FBQztJQUN2RTtFQUNGO0VBRUEsSUFBSUYsY0FBQSxDQUFjTCxLQUFLLENBQUMsRUFBRTtJQUN4QixJQUFJSyxjQUFBLENBQWNELGdCQUFnQixDQUFDLEVBQUU7TUFDbkM7TUFDQSxPQUFPQSxnQkFBZ0IsRUFBRUUsSUFBSSxDQUFFQyxXQUFXLElBQ3hDQyx5QkFBQSxDQUFBUixLQUFLLEVBQUFTLElBQUEsQ0FBTFQsS0FBSyxFQUFVTyxXQUFXLENBQzVCLENBQUM7SUFDSCxDQUFDLE1BQU0sSUFBSSxPQUFPSCxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7TUFDL0M7TUFDQSxPQUFPTSxxQkFBQSxDQUFBVixLQUFLLEVBQUFTLElBQUEsQ0FBTFQsS0FBSyxFQUFPTyxXQUFXLElBQUtILGdCQUFnQixLQUFLRyxXQUFXLENBQUM7SUFDdEU7RUFDRjs7RUFFQTtFQUNBLE9BQU8sS0FBSztBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBTUksV0FBVyxHQUFHQSxDQUFDO0VBQUVYO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLO0VBQzdDLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUMsRUFBRTtJQUN0QixNQUFNLElBQUliLG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDO0VBQ3hFO0VBRUEsSUFBSVksS0FBSyxJQUFJLENBQUNHLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDLEVBQUU7SUFDNUIsTUFBTSxJQUFJWCxjQUFjLENBQUMsbUNBQW1DLENBQUM7RUFDL0Q7QUFDRixDQUFDIn0=