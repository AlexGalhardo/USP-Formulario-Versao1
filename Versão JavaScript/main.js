/**
 * Projeto Desenvolvido para a Atividade 1 - Formulário de Cadastro
 *
 * Curso Sistemas Interativos WEB
 *
 * Prof. Rudinei Goularte (rudinei@icmc.usp.br)
 *
 * ICMC USP 2018
 *
 * Preview Project: https://forms.galhardoo.com
 *
 * Source Code: https://github.com/AlexGalhardo/Trabalho-Formulario
 *
 * Alex Galhardo Vieira
 * Github: https://github.com/AlexGalhardo	
 * Email: aleexgvieira@gmail.com / alexgalhardo@usp.br
 * Site: https://galhardoo.com
 */

/**
 * Educação
 *
 * Funcões para verificar formulário de educação
 *
 * Se o usuário possuir educação superior, peça para adicionar os dados da instituição e do curso
 */
function showDivEducacao(){
	if(document.getElementById("medio-incompleto").checked == false && document.getElementById("medio-completo").checked == false ){
		document.getElementById("div-educacao").removeAttribute("hidden");
	}
}
function hiddenDivEducacao(){
	document.getElementById("div-educacao").setAttribute("hidden", "true");
}

/**
 * Experiências profissionais
 *
 * Funções para verificar formulário de experiências profissionais
 *
 * Se o usuário possuir experiência profissional prévia,
 * peça para inserir os cargos e atribuições ocupados no último cargo
 */
function showAdicionarEmpresa(){
	var elPossuiExp = document.getElementById("possuiExperienciaProfissional");
	var buttonAdicionarExp = document.getElementById("button-adicionar-exp");
	if(elPossuiExp.checked){
		buttonAdicionarExp.removeAttribute("hidden");
	} 
}

function hiddenAdicionarEmpresa(){
	var elPossuiExp = document.getElementById("possuiExperienciaProfissional");
	var buttonAdicionarExp = document.getElementById("button-adicionar-exp");
	if(!elPossuiExp.checked){
		buttonAdicionarExp.setAttribute("hidden", "true");
	}
	hiddenAdicionarDadosEmpresa();
}

function showAdicionarDadosEmpresa(){
	var elDivDadosEmpresa = document.getElementById("div-ultima-exp");
	elDivDadosEmpresa.removeAttribute("hidden");
}

function hiddenAdicionarDadosEmpresa(){
	var elDivDadosEmpresa = document.getElementById("div-ultima-exp");
	elDivDadosEmpresa.setAttribute("hidden", "true");
}

/**
 * Última função a ser chamada
 * Verifica todos os dados inseridos no formulário
 *
 * Se tudo estiver beleza, mande-os para o servidor
 */
function cadastrarDados(){

	/************ Dados Pessoais *************/
	/**
	 * Verifica se o usuário digitou um nome válido
	 */
	var elNome = document.getElementById("nomeCompleto");
	var spanErrorNome = document.getElementById("errorNome");
	if(elNome.value.toString().length < 8){
		spanErrorNome.innerHTML = "Digite seu nome completo com pelo menos 8 caracteres!";
	} else { spanErrorNome.innerHTML = "";}
	/**
	 *Verifica se o usuário digitou um email válido
	 */
	var elEmail = document.getElementById("email");
	var spanErrorEmail = document.getElementById("errorEmail");
	if(elEmail.value == ''){
		spanErrorEmail.innerHTML = "Você precisa adicionar um email!";
	}
	else if (elEmail.value != ''){
		/**
		 * Regex para verificar se o email é válido
		 *
		 * Referência: http://jsfiddle.net/ghvj4gy9/embedded/result,js/
		 */
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		/**
		 * Se o retorno da Regex for falso, avise o erro
		 */
		if(!re.test(String(elEmail.value).toLowerCase())){
			spanErrorEmail.innerHTML = "Digite um email válido!";
		}
	} else {
		spanErrorEmail.innerHTML = "" 
	};
	/**
	 * Verifica se o número do celular possui pelo menos 11 digitos
	 */
	var elCelular = document.getElementById("celular");
	var spanErrorCelular = document.getElementById("errorCelular");
	if(elCelular.value.toString().length < 11 || elCelular.value.toString().length > 11){
		spanErrorCelular.innerHTML = "Você precisa digitar um número de celular válido com pelo menos 11 dígitos!";
	} else { spanErrorCelular.innerHTML = ""; }
	/**
	 * Verifica se o gênero foi selecionado
	 */
	var elGenero = document.getElementsByName("genero");
	var spanErrorGenero = document.getElementById("errorGenero");
	var generoSelecionado = false;
	for(var i = 0, length = elGenero.length; i < elGenero.length; i++){
		if(elGenero[i].checked){
			generoSelecionado = true;
			break;
		}
	}
	if(!generoSelecionado){
		spanErrorGenero.innerHTML = "Você precisa escolher um dos gêneros abaixo.";
	} else {
		spanErrorGenero.innerHTML = "";
	}
	/**
	 * Verifica se o usuário digitou um CPF válido
	 */
	var elCPF = document.getElementById("cpf");
	var spanErrorCPF = document.getElementById("errorCPF");
	if(elCPF.value.toString().length < 11 || elCPF.value.toString().length > 11){
		spanErrorCPF.innerHTML = "Você precisa digitar um CPF válido com pelo menos 11 dígitos!";
	} else {
		spanErrorCPF.innerHTML = "";
	}


	/************ Interesse de Vaga *************/
	/**
	 * Verifica se o usuário seleciou algum cargo
	 */
	var elCargo = document.getElementsByName("cargo");
	var spanErrorCargo = document.getElementById("errorCargo");
	var cargoChecked = false;
	for(var i = 0, length = elCargo.length; i < elCargo.length; i++){
		if(elCargo[i].checked){

			cargoChecked = true;
			break;
		}
	}
	if(!cargoChecked){
		spanErrorCargo.innerHTML = "Você precisa escolher um dos cargos abaixo!";
	} else {
		spanErrorCargo.innerHTML = ""; 
	}
	/**
	 * Verifica se o usuário seleciou alguma experiência
	 */
	var elExperiencia = document.getElementsByName("experienciaCargo");
	var spanErrorExperiencia = document.getElementById("errorExperiencia");
	var experienciaChecked = false;
	for(var i = 0, length = elExperiencia.length; i < elExperiencia.length; i++){
		if(elExperiencia[i].checked){
			experienciaChecked = true;
			break;
		}
	}
	if(!experienciaChecked){
		spanErrorExperiencia.innerHTML = "Você precisa escolher uma das experiências abaixo!";
	} else {
		spanErrorCargo.innerHTML = "";
	}
	/**
	 * Verifica se a pretensão salarial esta válido
	 */
	var elPretensaoSalarial = document.getElementById("pretensaoSalarial");
	var spanErrorPretensaoSalarial = document.getElementById("errorPretensaoSalarial");
	if(elPretensaoSalarial.value <= 0){
		spanErrorPretensaoSalarial.innerHTML = "Você precisa digitar uma Pretensão Salarial válido, com valores acima de R$ 0 reais por mês!";
	} else {
		spanErrorPretensaoSalarial.innerHTML = "";
	}


	/************ Educação *************/
	/**
	 * Verifica se alguma opção de formação academia foi selecionado
	 */
	var elRadioEducacao = document.getElementsByName("educacao");
	var spanErrorEducacao = document.getElementById("errorEducacao");
	var radioEducacaoChecked = false;
	var textNodeEducacao;
	for(var i = 0; i < elRadioEducacao.length; i++){
		if(elRadioEducacao[i].checked){

   			radioEducacaoChecked = true;
   			break;
		}
	}
	if(!radioEducacaoChecked){
		spanErrorEducacao.innerHTML = "Você precisa selecionar uma das opções abaixo!";
	}
	/**
	 * Verifica se o nome do curso esta setado
	 */
	if(document.getElementById("nomeCurso").value == ''){
		document.getElementById("errorNomeCurso").innerHTML = "Você precisa dizer o nome do curso!";
	} else {
		document.getElementById("errorNomeCurso").innerHTML = "";
	}

	/**
	 * Verifica se o nome da instituição de ensino esta setado                                                [description]
	 */
	if(document.getElementById("nomeInstituicao").value == ''){
		document.getElementById("errorNomeInstituicao").innerHTML = "Você precisa dizer o nome da instituição de ensino em que se formou!";
	} else {
		document.getElementById("errorNomeInstituicao").innerHTML = "";
	}

	/**
	 * Verifica se o ano de formação esta setado                                           [description]
	 */
	if(document.getElementById("anoFormacao").value == ''){
		document.getElementById("errorAnoFormacao").innerHTML = "Você precisa informar o ano de formação!";
	} else { 
		document.getElementById("errorAnoFormacao").innerHTML = "";
	}

	/**
	 * Se o campo "Possui Experiência Profissional" estiver setado
	 * verifica se os campos foram preenchidos
	 */
	if(document.getElementById("possuiExperienciaProfissional").checked){
		/**
		 * Verifica se o cargo que ocupou está setado
		 */
		var cargoQueOcupou = document.getElementById("cargoOcupou");
		if(cargoQueOcupou.value == ''){
			document.getElementById("errorCargoQueOcupou").innerHTML = "Você precisa adicionar o último cargo que ocupou!";
		}
		else {

			document.getElementById("errorCargoQueOcupou").innerHTML = "";
		}

		/**
		 * Verifica se o nome da empresa está setado
		 */
		var nomeEmpresa = document.getElementById("nomeEmpresa");
		if(nomeEmpresa.value == ''){
			document.getElementById("errorNomedaEmpresa").innerHTML = "Você precisa adicionar o nome da última em que trabalhou!";
		}else {
			document.getElementById("errorNomedaEmpresa").innerHTML = "";
		}

		/**
		 * Verifica se o usuário selecionou algum segmento
		 */
		var elSegmento = document.getElementsByName("segmento");
		var spanErrorSegmento = document.getElementById("errorSegmento");
		var segmentoChecked = false;
		for(var i = 0; i < elSegmento.length; i++){
			if(elSegmento[i].checked){
				segmentoChecked = true;
				break;
			}
		}
		if(!segmentoChecked){
			spanErrorSegmento.innerHTML = "Você precisa selecionar um dos segmentos abaixo!";
		} else {
			spanErrorSegmento.innerHTML = "";
		}

		/**
		 * Verifica se o usuário digitou alguma coisa no campo de responsabilidades profissionais
		 */
		var elResponsabilidades = document.getElementById("responsabilidadesCargo");
		var spanErrorResponsabilidades = document.getElementById("errorResponsabilidades");
		if(elResponsabilidades.value == ''){
			spanErrorResponsabilidades.innerHTML = "Por favor, diga nos um pouco mais das suas atribuições e responsabilidades do último cargo exercido."
		} else if(elResponsabilidades.value.toString().length < 50){
			spanErrorResponsabilidades.innerHTML = "Digite uma resposta válida com pelo menos 50 caracteres!"
		} else {
			spanErrorResponsabilidades.innerHTML = "";
		}
	}



	/**
	 * Verifica se a variavel 'formularioValido' é true,
	 * que certifica que todos os campos inseridos do formulário estão corretos
	 */
	// Avise que os dados foram cadastrados com sucesso
	alert("Dados cadastrados! Verifique o formulário para ver os erros e no topo os dados recém cadastrados!");
	
	// Cria uma div no topo da página, mostrando os dados inseridos no formulário
	var divDadosInseridos = document.getElementById("dadosInseridos");
	divDadosInseridos.removeAttribute("hidden");
						/* Dados Pessoais */
	// NOME
	var elPNome = document.createElement("p");
	var stringNome = "Nome: " + document.getElementById("nomeCompleto").value;
	var textNodeNome = document.createTextNode(stringNome);
	elPNome.appendChild(textNodeNome);
	divDadosInseridos.appendChild(elPNome);
	// Email
	var elPEmail = document.createElement("p");
	var stringEmail = "Email: " + document.getElementById("email").value;
	var textNodeEmail = document.createTextNode(stringEmail);
	elPEmail.appendChild(textNodeEmail);
	divDadosInseridos.appendChild(elPEmail);
	// Celular
	var elPCelular = document.createElement("p");
	var stringCelular = "Celular: " + document.getElementById("celular").value;
	var textNodeCelular = document.createTextNode(stringCelular);
	elPCelular.appendChild(textNodeCelular);
	divDadosInseridos.appendChild(elPCelular);
	// Genero
	var elPGenero = document.createElement("p");
	var elGeneroRadios = document.getElementsByName("genero");
	var textNodeGenero;
	for (var i = 0, length = elGeneroRadios.length; i < length; i++){
		if (elGeneroRadios[i].checked){
	  		textNodeGenero = elGeneroRadios[i].value;
	  		break;
	 	}
	}
	elPGenero.innerHTML = "Genero: " + textNodeGenero;
	divDadosInseridos.appendChild(elPGenero);
	// Estado Civil
	var elPEstadoCivil = document.createElement("p");
	var stringEstadoCivil = "Estado Civil: " + document.getElementById("estadoCivil").value;
	var textNodeEstadoCivil = document.createTextNode(stringEstadoCivil);
	elPEstadoCivil.appendChild(textNodeEstadoCivil);
	divDadosInseridos.appendChild(elPEstadoCivil);
	// Nacionalidade
	var elPNacionalidade = document.createElement("p");
	var stringNacionalidade = "Nacionalidade: " + document.getElementById("nacionalidade").value;
	var textNodeNacionalidade = document.createTextNode(stringNacionalidade);
	elPNacionalidade.appendChild(textNodeNacionalidade);
	divDadosInseridos.appendChild(elPNacionalidade);
	// CPF
	var elPCPF = document.createElement("p");
	var stringCPF = "CPF: " + document.getElementById("cpf").value;
	var textNodeCPF = document.createTextNode(stringCPF);
	elPCPF.appendChild(textNodeCPF);
	divDadosInseridos.appendChild(elPCPF);

						/* Dados de Endereço */
	// Rua
	var elPRua = document.createElement("p");
	var stringRua = "Rua: " + document.getElementById("rua").value;
	var textNodeRua = document.createTextNode(stringRua);
	elPRua.appendChild(textNodeRua);
	divDadosInseridos.appendChild(elPRua);
	// Bairro
	var elPBairro = document.createElement("p");
	var stringBairro = "Bairro: " + document.getElementById("bairro").value;
	var textNodeBairro = document.createTextNode(stringBairro);
	elPBairro.appendChild(textNodeBairro);
	divDadosInseridos.appendChild(elPBairro);
	// Numero Residencia
	var elPNumeroResidencia = document.createElement("p");
	var stringNumeroResidencia = "Numero Residencia: " + document.getElementById("numeroResidencia").value;
	var textNodeNumeroResidencia = document.createTextNode(stringNumeroResidencia);
	elPNumeroResidencia.appendChild(textNodeNumeroResidencia);
	divDadosInseridos.appendChild(elPNumeroResidencia);

						/* Dados de Interesse de Vaga */
	// Cargo
	var elPCargo = document.createElement("p");
	var elRadioCargo = document.getElementsByName("cargo");
	var textNodeCargo;
	for(var i = 0, length = elRadioCargo.length; i < length; i++){
		if(elRadioCargo[i].checked){
			cargoChecked = true;
			textNodeCargo = elRadioCargo[i].value;
			break;
		}
	}
	elPCargo.innerHTML = "Interesse de Vaga: " + textNodeCargo;
	divDadosInseridos.appendChild(elPCargo);
	// Experiencia no Cargo
	var elPExperienciaCargo = document.createElement("p");
	var elRadioExperienciaCargo = document.getElementsByName("experienciaCargo");
	var textNodeExperienciaCargo;
	for(var i = 0, length = elRadioExperienciaCargo.length; i < length; i++){
		if(elRadioExperienciaCargo[i].checked){
			textNodeExperienciaCargo = elRadioExperienciaCargo[i].value;
			break;
		}
	}
	elPExperienciaCargo.innerHTML = "Experiencia no Cargo: " + textNodeExperienciaCargo;
	divDadosInseridos.appendChild(elPExperienciaCargo);
	// Regiao de Interesse
	var elPRegiaoInteresse = document.createElement("p");
	var stringRegiaoInteresse = "Região Interesse: " + document.getElementById("regiaoInteresse").value;
	var textNodeRegiaoInteresse = document.createTextNode(stringRegiaoInteresse);
	elPRegiaoInteresse.appendChild(textNodeRegiaoInteresse);
	divDadosInseridos.appendChild(elPRegiaoInteresse);
	// Pretensao Salarial
	var elPPretensaoSalarial = document.createElement("p");
	var stringPretensaoSalarial = "Pretensão Salarial: " + document.getElementById("pretensaoSalarial").value;
	var textNodePretensaoSalarial = document.createTextNode(stringPretensaoSalarial);
	elPPretensaoSalarial.appendChild(textNodePretensaoSalarial);
	divDadosInseridos.appendChild(elPPretensaoSalarial);


    					/* Dados de Educação */
    // Formação Acadêmica
	var elPFormacaoAcademica = document.createElement("p");
	var elRadioFormacaoAcademica = document.getElementsByName("educacao");
	var textNodeFormacaoAcademica;
	for(var i = 0, length = elRadioFormacaoAcademica.length; i < length; i++){
		if(elRadioFormacaoAcademica[i].checked){
			textNodeFormacaoAcademica = elRadioFormacaoAcademica[i].value;
			break;
		}
	}
	elPFormacaoAcademica.innerHTML = "Educação: " + textNodeFormacaoAcademica;
	divDadosInseridos.appendChild(elPFormacaoAcademica);
	// Ano de Formação
	var elPAnoFormacao = document.createElement("p");
	var stringAnoFormacao = "Ano Formação: " + document.getElementById("anoFormacao").value;
	var textNodeAnoFormacao = document.createTextNode(stringAnoFormacao);
	elPAnoFormacao.appendChild(textNodeAnoFormacao);
	divDadosInseridos.appendChild(elPAnoFormacao);
	// verifica se o candidato possui experiência com nível superior, se tiver
	// também diga os dados inseridos
	if(!document.getElementById("medio-incompleto").checked || !document.getElementById("medio-incompleto").checked){
		// Nome do Curso
		var elPNomeCurso = document.createElement("p");
		var stringNomeCurso = "Nome do Curso: " + document.getElementById("nomeCurso").value;
		var textNodeNomeCurso = document.createTextNode(stringNomeCurso);
		elPNomeCurso.appendChild(textNodeNomeCurso);
		divDadosInseridos.appendChild(elPNomeCurso);

		// Nome da Instituição
		var elPNomeInstituicao = document.createElement("p");
		var stringNomeInstituicao = "Nome da Instituição: " + document.getElementById("nomeInstituicao").value;
		var textNodeNomeInstituicao = document.createTextNode(stringNomeInstituicao);
		elPNomeInstituicao.appendChild(textNodeNomeInstituicao);
		divDadosInseridos.appendChild(elPNomeInstituicao);
	}

						/* Dados Experiencia Profissional */
	// verifica se possui experiencia profissional
	if(document.getElementById("possuiExperienciaProfissional").checked){
        // O candidato possui experiencia profissional
		var elPossuiExperienciaProfissional = document.createElement("p");
		var textNodePossuiExperienciaProfissional = document.createTextNode("O candidato POSSUI experiência profissional");
		elPossuiExperienciaProfissional.appendChild(textNodePossuiExperienciaProfissional);
		divDadosInseridos.appendChild(elPossuiExperienciaProfissional);
		// Nome da Empresa
		var elPNomeEmpresa = document.createElement("p");
		var stringNomeEmpresa = "Nome da Empresa: " + document.getElementById("nomeEmpresa").value;
		var textNodeNomeEmpresa = document.createTextNode(stringNomeEmpresa);
		elPNomeEmpresa.appendChild(textNodeNomeEmpresa);
		divDadosInseridos.appendChild(elPNomeEmpresa);
		// Inicio Mes
		var elPInicioMes = document.createElement("p");
		var stringInicioMes = "Inicio Mes: " + document.getElementById("inicioMes").value;
		var textNodeInicioMes = document.createTextNode(stringInicioMes);
		elPInicioMes.appendChild(textNodeInicioMes);
		divDadosInseridos.appendChild(elPInicioMes);
		// Inicio Ano
		var elPInicioAno = document.createElement("p");
		var stringInicioAno = "Inicio Ano: " + document.getElementById("inicioAno").value;
		var textNodeInicioAno = document.createTextNode(stringInicioAno);
		elPInicioAno.appendChild(textNodeInicioAno);
		divDadosInseridos.appendChild(elPInicioAno);
		// Fim Mes
		var elPFimMes = document.createElement("p");
		var stringFimMes = "Fim Mes: " + document.getElementById("fimMes").value;
		var textNodeFimMes = document.createTextNode(stringFimMes);
		elPFimMes.appendChild(textNodeFimMes);
		divDadosInseridos.appendChild(elPFimMes);
		// Fim Ano
		var elPFimAno = document.createElement("p");
		var stringFimAno = "Fim Ano: " + document.getElementById("fimAno").value;
		var textNodeFimAno = document.createTextNode(stringFimAno);
		elPFimAno.appendChild(textNodeFimAno);
		divDadosInseridos.appendChild(elPFimAno);
		// Segmento
		var elPSegmento = document.createElement("p");
		var elRadioSegmento = document.getElementsByName("segmento");
		var textNodeSegmento;
		for(var i = 0, length = elRadioSegmento.length; i < length; i++){
			if(elRadioSegmento[i].checked){
				textNodeSegmento = elRadioSegmento[i].value;
				break;
			}
		}
		elPSegmento.innerHTML = "Segmento: " + textNodeSegmento;
		divDadosInseridos.appendChild(elPSegmento);
		// Cargo que ocupou
		var elPCargoOcupou = document.createElement("p");
		var stringCargoOcupou = "Cargo que Ocupou: " + document.getElementById("cargoOcupou").value;
		var textNodeCargoOcupou = document.createTextNode(stringCargoOcupou);
		elPCargoOcupou.appendChild(textNodeCargoOcupou);
		divDadosInseridos.appendChild(elPCargoOcupou);
		// Responsabilidades no Cargo
		var elPResponsabilidadesCargo = document.createElement("p");
		var stringResponsabilidadesCargo = "Responsabilidades no Cargo: " + document.getElementById("responsabilidadesCargo").value;
		var textNodeResponsabilidadesCargo = document.createTextNode(stringResponsabilidadesCargo);
		elPResponsabilidadesCargo.appendChild(textNodeResponsabilidadesCargo);
		divDadosInseridos.appendChild(elPResponsabilidadesCargo);

	} else {
		var elPExperienciaProfissional = document.createElement("p");
		var textNodeExperienciaProfissional = document.createTextNode("O candidato NÃO possui experiência profissional");
		elPExperienciaProfissional.appendChild(textNodeExperienciaProfissional);
		divDadosInseridos.appendChild(elPExperienciaProfissional);
	}
	

	var HR = document.createElement("hr");
	divDadosInseridos.appendChild(HR);
}