import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';

const Form = styled.form``;

const FormGroup = styled.div`
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.875rem;
`;

const Inputs = styled.div`
  display: grid;
  row-gap: 10px;
  margin-bottom: 1.875rem;
`;

const Label = styled.label`
  margin-left: 1.875rem;
  font-size: var(--smaller);
  font-weight: 700;

  & b {
    color: var(--primary);
  }
`;

const Input = styled.input`
  border: 2px solid var(--border);
  background-color: var(--container);
  color: var(--title);
  height: 60px;
  padding-inline: 1.875rem;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  border: 2px solid var(--border);
  background-color: var(--container);
  border-radius: 8px;
  height: 140px;
  padding-inline: 1.875rem;
  padding-block: 1.25rem;
  resize: none;
  font-family: var(--font1);
  color: var(--title);
  font-size: var(--normal);
`;

const Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.button``;

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    date: ''
  });

  const handleChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setForm({
      ...form,
      [inputName]: inputValue,
      date: new Date().toLocaleString('es-AR', {
        timeZone: 'America/Buenos_Aires'
      })
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        'https://sheet.best/api/sheets/497800b8-5ed4-4022-9e1b-7e3dab6e9fa1',
        form
      )
      .then(res => {
        setForm({ name: '', email: '', subject: '', message: '' });
        Swal.fire({
          background: 'transparent',
          color: '#ebebeb',
          position: 'top-end',
          icon: 'success',
          title: 'Enviado!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="grid">
        <Inputs>
          <Label className="text-cs">
            Nombre <b>*</b>
          </Label>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Inputs>
        <Inputs>
          <Label className="text-cs">
            Correo Electronico <b>*</b>
          </Label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Inputs>
      </FormGroup>
      <Inputs>
        <Label className="text-cs">Asunto</Label>
        <Input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />
      </Inputs>
      <Inputs>
        <Label className="text-cs">
          Mensaje <b>*</b>
        </Label>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </Inputs>
      <Submit>
        <Button className="text-cs btn">Enviar</Button>
      </Submit>
    </Form>
  );
};

export default ContactForm;
