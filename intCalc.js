function dividir() {
  let n1 = document.getElementById("divr");
  let n2 = document.getElementById("div");
  let dividendo = Number(n1.value);
  let divisor = Number(n2.value);
  let quociente = Number;
  let resto = Number;

  quociente = Math.floor(dividendo / divisor);
  resto = dividendo % divisor;
  res.innerHTML = `Quociente ${quociente}  Resto ${resto}`;
  document.getElementById("divr").value = quociente;
}
