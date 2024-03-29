import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const MyComponent = () => {
  return (
    <div>
      <h2> CKEditor 5 </h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(_, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(_, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  );
};

export default MyComponent;
