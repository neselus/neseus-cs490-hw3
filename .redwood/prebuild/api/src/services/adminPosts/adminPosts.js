import { ForbiddenError, context } from '@redwoodjs/graphql-server';
import { db } from "../../lib/db";
const verifyOwnership = async ({
  id
}) => {
  if (await adminPost({
    id
  })) {
    return true;
  } else {
    throw new ForbiddenError("You don't have access to this post");
  }
};
export const adminPosts = () => {
  return db.post.findMany({
    where: {
      userId: context.currentUser.id
    }
  });
};
export const adminPost = ({
  id
}) => {
  return db.post.findFirst({
    where: {
      id,
      userId: context.currentUser.id
    }
  });
};
export const createPost = ({
  input
}) => {
  return db.post.create({
    data: {
      ...input,
      userId: context.currentUser.id
    }
  });
};
export const updatePost = async ({
  id,
  input
}) => {
  await verifyOwnership({
    id
  });
  return db.post.update({
    data: input,
    where: {
      id
    }
  });
};
export const deletePost = async ({
  id
}) => {
  await verifyOwnership({
    id
  });
  return db.post.delete({
    where: {
      id
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JiaWRkZW5FcnJvciIsImNvbnRleHQiLCJkYiIsInZlcmlmeU93bmVyc2hpcCIsImlkIiwiYWRtaW5Qb3N0IiwiYWRtaW5Qb3N0cyIsInBvc3QiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJmaW5kRmlyc3QiLCJjcmVhdGVQb3N0IiwiaW5wdXQiLCJjcmVhdGUiLCJkYXRhIiwidXBkYXRlUG9zdCIsInVwZGF0ZSIsImRlbGV0ZVBvc3QiLCJkZWxldGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcGkvc3JjL3NlcnZpY2VzL2FkbWluUG9zdHMvYWRtaW5Qb3N0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JiaWRkZW5FcnJvciB9IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcblxuY29uc3QgdmVyaWZ5T3duZXJzaGlwID0gYXN5bmMgKHsgaWQgfSkgPT4ge1xuICBpZiAoYXdhaXQgYWRtaW5Qb3N0KHsgaWQgfSkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBGb3JiaWRkZW5FcnJvcihcIllvdSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGlzIHBvc3RcIilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRtaW5Qb3N0cyA9ICgpID0+IHtcbiAgcmV0dXJuIGRiLnBvc3QuZmluZE1hbnkoeyB3aGVyZTogeyB1c2VySWQ6IGNvbnRleHQuY3VycmVudFVzZXIuaWQgfSB9KVxufVxuXG5leHBvcnQgY29uc3QgYWRtaW5Qb3N0ID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIucG9zdC5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IGlkLCB1c2VySWQ6IGNvbnRleHQuY3VycmVudFVzZXIuaWQgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3QgPSAoeyBpbnB1dCB9KSA9PiB7XG4gIHJldHVybiBkYi5wb3N0LmNyZWF0ZSh7XG4gICAgZGF0YTogeyAuLi5pbnB1dCwgdXNlcklkOiBjb250ZXh0LmN1cnJlbnRVc2VyLmlkIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQb3N0ID0gYXN5bmMgKHsgaWQsIGlucHV0IH0pID0+IHtcbiAgYXdhaXQgdmVyaWZ5T3duZXJzaGlwKHsgaWQgfSlcblxuICByZXR1cm4gZGIucG9zdC51cGRhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0ID0gYXN5bmMgKHsgaWQgfSkgPT4ge1xuICBhd2FpdCB2ZXJpZnlPd25lcnNoaXAoeyBpZCB9KVxuXG4gIHJldHVybiBkYi5wb3N0LmRlbGV0ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSlcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsY0FBYyxFQWFzQkMsT0FBTyxRQWJyQiwyQkFBMkI7QUFFMUQsU0FBU0MsRUFBRTtBQUVYLE1BQU1DLGVBQWUsR0FBRyxNQUFBQSxDQUFPO0VBQUVDO0FBQUcsQ0FBQyxLQUFLO0VBQ3hDLElBQUksTUFBTUMsU0FBUyxDQUFDO0lBQUVEO0VBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDM0IsT0FBTyxJQUFJO0VBQ2IsQ0FBQyxNQUFNO0lBQ0wsTUFBTSxJQUFJSixjQUFjLENBQUMsb0NBQW9DLENBQUM7RUFDaEU7QUFDRixDQUFDO0FBRUQsT0FBTyxNQUFNTSxVQUFVLEdBQUdBLENBQUEsS0FBTTtFQUM5QixPQUFPSixFQUFFLENBQUNLLElBQUksQ0FBQ0MsUUFBUSxDQUFDO0lBQUVDLEtBQUssRUFBRTtNQUFFQyxNQUFNLEVBQUVULE9BQU8sQ0FBQ1UsV0FBVyxDQUFDUDtJQUFHO0VBQUUsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFFRCxPQUFPLE1BQU1DLFNBQVMsR0FBR0EsQ0FBQztFQUFFRDtBQUFHLENBQUMsS0FBSztFQUNuQyxPQUFPRixFQUFFLENBQUNLLElBQUksQ0FBQ0ssU0FBUyxDQUFDO0lBQ3ZCSCxLQUFLLEVBQUU7TUFBRUwsRUFBRTtNQUFFTSxNQUFNLEVBQUVULE9BQU8sQ0FBQ1UsV0FBVyxDQUFDUDtJQUFHO0VBQzlDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxPQUFPLE1BQU1TLFVBQVUsR0FBR0EsQ0FBQztFQUFFQztBQUFNLENBQUMsS0FBSztFQUN2QyxPQUFPWixFQUFFLENBQUNLLElBQUksQ0FBQ1EsTUFBTSxDQUFDO0lBQ3BCQyxJQUFJLEVBQUU7TUFBRSxHQUFHRixLQUFLO01BQUVKLE1BQU0sRUFBRVQsT0FBTyxDQUFDVSxXQUFXLENBQUNQO0lBQUc7RUFDbkQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTWEsVUFBVSxHQUFHLE1BQUFBLENBQU87RUFBRWIsRUFBRTtFQUFFVTtBQUFNLENBQUMsS0FBSztFQUNqRCxNQUFNWCxlQUFlLENBQUM7SUFBRUM7RUFBRyxDQUFDLENBQUM7RUFFN0IsT0FBT0YsRUFBRSxDQUFDSyxJQUFJLENBQUNXLE1BQU0sQ0FBQztJQUNwQkYsSUFBSSxFQUFFRixLQUFLO0lBQ1hMLEtBQUssRUFBRTtNQUFFTDtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTWUsVUFBVSxHQUFHLE1BQUFBLENBQU87RUFBRWY7QUFBRyxDQUFDLEtBQUs7RUFDMUMsTUFBTUQsZUFBZSxDQUFDO0lBQUVDO0VBQUcsQ0FBQyxDQUFDO0VBRTdCLE9BQU9GLEVBQUUsQ0FBQ0ssSUFBSSxDQUFDYSxNQUFNLENBQUM7SUFDcEJYLEtBQUssRUFBRTtNQUFFTDtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9