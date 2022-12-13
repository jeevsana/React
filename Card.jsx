
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function TextExample({data}) {
    console.log(data)
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        {data.description}
        </Card.Text>
        <Button variant="success">Primary</Button>
        
      </Card.Body>
    </Card>
  );
}

export default TextExample;