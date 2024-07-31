import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const StudentModal = ({ show, handleClose, student, handleChange, handleSave, mode }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === 'edit' ? 'Editar Estudante' : mode === 'create' ? 'Adicionar Estudante' : 'Excluir Estudante'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {mode === 'edit' || mode === 'create' ? (
          <Form>
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
          </Form>
        ) : (
          <p>Tem certeza que deseja excluir o estudante {student.nome}?</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant={mode === 'edit' ? 'primary' : mode === 'create' ? 'primary' : 'danger'} onClick={handleSave}>
          {mode === 'edit' ? 'Salvar Alterações' : mode === 'create' ? 'Adicionar Estudante' : 'Excluir Estudante'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentModal;
