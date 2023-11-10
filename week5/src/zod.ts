async function createUser(user: any) {}

const user = {
  name: 'Mr. Pibb',
  email: 'pibb@gmail.com',
};

createUser(user).then(() => process.exit(0));
