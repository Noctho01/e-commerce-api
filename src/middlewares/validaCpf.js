export function ValidaCpf (cpf) {
	let sum = 0
	let remainder

	let allEqual = true
	for (var i = 0; i < cpf.length - 1; i++) {
		if (cpf[i] != cpf[i + 1]) { allEqual = false }
	}
	
	if (allEqual) { return false }

	for (i = 1; i <= 9; i++) {
		sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
	}

	remainder = (sum * 10) % 11

	if ((remainder == 10) || (remainder == 11)) remainder = 0
	if (remainder != parseInt(cpf.substring(9, 10))) return false

	sum = 0
	for (i = 1; i <= 10; i++) {
		sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
	}
	
	remainder = (sum * 10) % 11

	if ((remainder == 10) || (remainder == 11)) remainder = 0
	if (remainder != parseInt(cpf.substring(10, 11))) return false

	return true
}