function dividir() {
  let n1 = document.getElementById("dividend");
  let n2 = document.getElementById("divider");
  let dividend = Number(n1.value);
  let divider = Number(n2.value);
  let quociente = Number;
  let resto = Number;

  quociente = Math.floor(dividend / divider);
  resto = dividend % divider;
  result.innerHTML = `Quociente = ${quociente} » Resto = ${resto}`;
  document.getElementById("dividend").value = quociente;
}
