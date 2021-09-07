// == Import npm
import React, { useRef } from 'react';
import {
  Segment, Container, Button,
  Form,
  Input,
  Select,
} from 'semantic-ui-react';
import { Editor } from '@tinymce/tinymce-react';

// == Import CSS
import './styles.scss';

// == Composant
const Blog = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const options = [
    { key: 'm', text: 'Musique', value: 'Musique' },
    { key: 'j', text: 'Jeux Vidéos', value: 'Jeux Vidéos' },
    { key: 'sp', text: 'Sport', value: 'Sport' },
    { key: 's', text: 'Science', value: 'Science' },
    { key: 'a', text: 'Art', value: 'Art' },
  ];

  return (
    <Container>
      <Segment vertical>
        <h1 className="title">
          #Blog
        </h1>
      </Segment>

      <Segment vertical color="teal">
        <Segment vertical>
          <h3>La feature blog n'est pas encore disponible, désolé!</h3>
        </Segment>
        <Form className="form-container">
          <Form.Group widths="equal">
            <Form.Field
              required
              control={Input}
              label="Titre de l'article"
              placeholder="Titre de l'article"
            />
            <Form.Field
              required
              control={Input}
              label="URL de l'image"
              placeholder="URL d'une image d'illustration"
            />
            <Form.Field
              required
              control={Select}
              label="Catégories"
              options={options}
              placeholder="Catégories"
            />
          </Form.Group>
          <Form.Field
            required
          >
            <label>Description</label>
            <>
              <Editor
                onInit={(_evt, editor) => editorRef.current = editor}
                apiKey="wj36z8itpdy4p2j1o6fy8iptv5up7rfb7ksn6uxuzp7jn0n9"
                initialValue="<p>Vous pouvez dès maintenant créer votre propre article! Félicitations!</p>"
                init={{
                  height: 400,
                  menubar: true,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar: 'undo redo | formatselect | '
          + 'bold italic backcolor | alignleft aligncenter '
          + 'alignright alignjustify | bullist numlist outdent indent | '
          + 'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
              />
            </>
          </Form.Field>
          <Form.Checkbox
            label="Je certifie que mon article respect les conditions d'édition de toutSur.app"
            required
          />
          <Button color="teal" disabled fluid onClick={log}>Envoyer</Button>
        </Form>
      </Segment>
    </Container>
  );
};

// == Export
export default Blog;
