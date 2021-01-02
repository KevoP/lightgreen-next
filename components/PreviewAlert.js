import {Alert} from 'react-bootstrap'

export default function PreviewAlert() {
   return (
      <Alert variant="secondary">
         You are in preview mode &nbsp;
         <Alert.Link href="/api/exit-preview">Exit Preview Mode</Alert.Link>
      </Alert>
   )
}
