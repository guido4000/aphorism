const update = {
  add: ({ num }) => ({ num: num + 1 }),
  sub: ({ num }) => ({ num: num - 1 }),
  set: ({ aphos }) => ({
    current: aphos[Math.floor(Math.random() * aphos.length)]
  })
};

export default update;
