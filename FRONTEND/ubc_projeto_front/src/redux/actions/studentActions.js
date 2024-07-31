import axiosInstance from '../utils/axiosInstance';

// Fetch students
export const fetchStudents = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_STUDENTS_REQUEST' });

  const localToken = localStorage?.getItem("token");

  try {
    const { data } = await axiosInstance.get('/students', {
      headers: {
        'Authorization': `Bearer ${localToken}`
      }
    });
    dispatch({ type: 'FETCH_STUDENTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_STUDENTS_FAILURE', payload: error.message });
  }
};

// Create student
export const createStudent = (student) => async (dispatch, getState) => {
  const localToken = localStorage?.getItem("token");

  try {
    await axiosInstance.post('/students', student, {
      headers: {
        'Authorization': `Bearer ${localToken}`
      }
    });
    dispatch(fetchStudents());
  } catch (error) {
    console.error('Error creating student:', error);
  }
};

// Update student
export const updateStudent = (id, student) => async (dispatch, getState) => {
  const localToken = localStorage?.getItem("token");

  try {
    await axiosInstance.put(`/students/${id}`, student, {
      headers: {
        'Authorization': `Bearer ${localToken}`
      }
    });
    dispatch(fetchStudents());
  } catch (error) {
    console.error('Error updating student:', error);
  }
};

// Delete student
export const deleteStudent = (id) => async (dispatch, getState) => {
  const localToken = localStorage?.getItem("token");

  try {
    await axiosInstance.delete(`/students/${id}`, {
      headers: {
        'Authorization': `Bearer ${localToken}`
      }
    });
    dispatch(fetchStudents());
  } catch (error) {
    console.error('Error deleting student:', error);
  }
};
