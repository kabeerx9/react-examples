const withRole = <P extends object>(Component: React.FC<P>, role: string) => {
  console.log('HOC IS RENDERED');

  return (props: P) => {
    console.log('HOC RETURNING COMPONENT');
    console.log('props in HOC returning component : ', props);
    if (role === 'student') {
      return <Component {...props} />;
    }
    return null;
  };
};
export default withRole;
