import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { createStudent, updateStudent } from '../redux/actions/studentActions';
import { Form, Button, Container } from 'react-bootstrap';

const StudentForm = () => {
  const [student, setStudent] = useState({
    nome: '',
    idade: '',
    serie: '',
    notaMedia: '',
    endereco: '',
    nomePai: '',
    nomeMae: '',
    dataNascimento: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { students } = useSelector(state => state.students);

  useEffect(() => {
    if (id) {
      const studentToEdit = students.find(student => student.id === parseInt(id));
      if (studentToEdit) {
        setStudent({
          ...studentToEdit,
          dataNascimento: new Date(studentToEdit.dataNascimento).toISOString().split('T')[0]  // Formatar data de nascimento
        });
      }
    }
  }, [id, students]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateStudent(id, student));
    } else {
      dispatch(createStudent(student));
    }
    navigate('/students');
  };

  return (
    <Container className="mt-5">
      <h2>{id ? 'Editar Estudante' : 'Adicionar Estudante'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={student.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIdade">
          <Form.Label>Idade</Form.Label>
          <Form.Control
            type="number"
            name="idade"
            value={student.idade}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSerie">
          <Form.Label>Série</Form.Label>
          <Form.Control
            type="text"
            name="serie"
            value={student.serie}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNotaMedia">
          <Form.Label>Nota Média</Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            name="notaMedia"
            value={student.notaMedia}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEndereco">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            name="endereco"
            value={student.endereco}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNomePai">
          <Form.Label>Nome do Pai</Form.Label>
          <Form.Control
            type="text"
            name="nomePai"
            value={student.nomePai}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNomeMae">
          <Form.Label>Nome da Mãe</Form.Label>
          <Form.Control
            type="text"
            name="nomeMae"
            value={student.nomeMae}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDataNascimento">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            name="dataNascimento"
            value={student.dataNascimento}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {id ? 'Salvar Alterações' : 'Adicionar Estudante'}
        </Button>
      </Form>
    </Container>
  );
};

export default StudentForm;
