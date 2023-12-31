import { db } from "../../lib/db";
import { validate } from '@redwoodjs/api';
export const contacts = () => {
  return db.contact.findMany();
};
export const contact = ({
  id
}) => {
  return db.contact.findUnique({
    where: {
      id
    }
  });
};
export const createContact = ({
  input
}) => {
  validate(input.email, 'email', {
    email: true
  });
  return db.contact.create({
    data: input
  });
};
export const updateContact = ({
  id,
  input
}) => {
  return db.contact.update({
    data: input,
    where: {
      id
    }
  });
};
export const deleteContact = ({
  id
}) => {
  return db.contact.delete({
    where: {
      id
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYiIsInZhbGlkYXRlIiwiY29udGFjdHMiLCJjb250YWN0IiwiZmluZE1hbnkiLCJpZCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNyZWF0ZUNvbnRhY3QiLCJpbnB1dCIsImVtYWlsIiwiY3JlYXRlIiwiZGF0YSIsInVwZGF0ZUNvbnRhY3QiLCJ1cGRhdGUiLCJkZWxldGVDb250YWN0IiwiZGVsZXRlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBpL3NyYy9zZXJ2aWNlcy9jb250YWN0cy9jb250YWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJ0ByZWR3b29kanMvYXBpJ1xuXG5leHBvcnQgY29uc3QgY29udGFjdHMgPSAoKSA9PiB7XG4gIHJldHVybiBkYi5jb250YWN0LmZpbmRNYW55KClcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSAoeyBpZCB9KSA9PiB7XG4gIHJldHVybiBkYi5jb250YWN0LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250YWN0ID0gKHsgaW5wdXQgfSkgPT4ge1xuICB2YWxpZGF0ZShpbnB1dC5lbWFpbCwgJ2VtYWlsJywgeyBlbWFpbDogdHJ1ZSB9KVxuXG4gIHJldHVybiBkYi5jb250YWN0LmNyZWF0ZSh7XG4gICAgZGF0YTogaW5wdXQsXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb250YWN0ID0gKHsgaWQsIGlucHV0IH0pID0+IHtcbiAgcmV0dXJuIGRiLmNvbnRhY3QudXBkYXRlKHtcbiAgICBkYXRhOiBpbnB1dCxcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29udGFjdCA9ICh7IGlkIH0pID0+IHtcbiAgcmV0dXJuIGRiLmNvbnRhY3QuZGVsZXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxFQUFFO0FBQ1gsU0FBU0MsUUFBUSxRQUFRLGdCQUFnQjtBQUV6QyxPQUFPLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFNO0VBQzVCLE9BQU9GLEVBQUUsQ0FBQ0csT0FBTyxDQUFDQyxRQUFRLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsT0FBTyxNQUFNRCxPQUFPLEdBQUdBLENBQUM7RUFBRUU7QUFBRyxDQUFDLEtBQUs7RUFDakMsT0FBT0wsRUFBRSxDQUFDRyxPQUFPLENBQUNHLFVBQVUsQ0FBQztJQUMzQkMsS0FBSyxFQUFFO01BQUVGO0lBQUc7RUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNRyxhQUFhLEdBQUdBLENBQUM7RUFBRUM7QUFBTSxDQUFDLEtBQUs7RUFDMUNSLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDQyxLQUFLLEVBQUUsT0FBTyxFQUFFO0lBQUVBLEtBQUssRUFBRTtFQUFLLENBQUMsQ0FBQztFQUUvQyxPQUFPVixFQUFFLENBQUNHLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDO0lBQ3ZCQyxJQUFJLEVBQUVIO0VBQ1IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTUksYUFBYSxHQUFHQSxDQUFDO0VBQUVSLEVBQUU7RUFBRUk7QUFBTSxDQUFDLEtBQUs7RUFDOUMsT0FBT1QsRUFBRSxDQUFDRyxPQUFPLENBQUNXLE1BQU0sQ0FBQztJQUN2QkYsSUFBSSxFQUFFSCxLQUFLO0lBQ1hGLEtBQUssRUFBRTtNQUFFRjtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTVUsYUFBYSxHQUFHQSxDQUFDO0VBQUVWO0FBQUcsQ0FBQyxLQUFLO0VBQ3ZDLE9BQU9MLEVBQUUsQ0FBQ0csT0FBTyxDQUFDYSxNQUFNLENBQUM7SUFDdkJULEtBQUssRUFBRTtNQUFFRjtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9