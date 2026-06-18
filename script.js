//your JS code here. If required.
let ip = document.getElementById("ip");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

function res1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 2000);
  });
}

function resInto2(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data * 2);
    }, 1000);
  });
}

function resMinus3(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data - 3);
    }, 1000);
  });
}

function resDivide2(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data / 2);
    }, 1000);
  });
}

function resAdd10(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data + 10);
    }, 1000);
  });
}

btn.addEventListener("click", () => {
  let val = Number(ip.value);
  let timer = Date();
  console.log(timer.split(" ")[4].split(":")[2]);

  res1()
    .then(() => {
      let timer = Date();
      console.log(timer.split(" ")[4].split(":")[2]);
      output.innerText = val;
      return resInto2(val);
    })
    .then((data) => {
      let timer = Date();
      console.log(timer.split(" ")[4].split(":")[2]);
      output.innerText = data;
      return resMinus3(data);
    })
    .then((data) => {
      let timer = Date();
      console.log(timer.split(" ")[4].split(":")[2]);
      output.innerText = data;
      return resDivide2(data);
    })
    .then((data) => {
      let timer = Date();
      console.log(timer.split(" ")[4].split(":")[2]);
      output.innerText = data;
      return resAdd10(data);
    })
    .then((data) => {
      let timer = Date();
      console.log(timer.split(" ")[4].split(":")[2]);
      output.innerText = data;
    })
    .catch((e) => {
      console.log(e);
    });
});

