async function sleep(time = 500) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
}

export { sleep };
