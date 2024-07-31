import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents, deleteStudent } from '../redux/actions/studentActions';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const StudentList = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector(state => state.students);
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchStudents());
    }
  }, [dispatch, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container className="mt-5">
      <h2>Lista de Estudantes</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Série</th>
            <th>Nota Média</th>
            <th>Endereço</th>
            <th>Nome do Pai</th>
            <th>Nome da Mãe</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.nome}</td>
              <td>{student.idade}</td>
              <td>{student.serie}</td>
              <td>{student.notaMedia}</td>
              <td>{student.endereco}</td>
              <td>{student.nomePai}</td>
              <td>{student.nomeMae}</td>
              <td>{new Date(student.dataNascimento).toLocaleDateString()}</td>
              <td>
                <Button variant="warning" as={Link} to={`/edit-student/${student.id}`} className="me-2">
                  <FaEdit />
                </Button>
                <Button variant="danger" onClick={() => dispatch(deleteStudent(student.id))}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentList;
