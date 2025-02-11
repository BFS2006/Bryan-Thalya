function atualizarContador() {
    const dataInicio = new Date('2025-01-28T17:50:00'); // Defina a data de início aqui
    const agora = new Date();
    
    var hora = document.getElementById("horaL1")

    // Calcula a diferença em milissegundos
    const diferenca = agora - dataInicio;
    
    // Converte a diferença para dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    // Formata o contador
    const contadorFormatado = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    console.log(contadorFormatado);
    // Se quiser exibir na página, use: document.body.innerText = contadorFormatado;
    // document.getElementById("horaL1").innerHTML = contadorFormatado;
    hora.innerHTML = contadorFormatado
    }

    function atualizarContador2() {
        const dataInicio = new Date('2025-01-17T17:30:00'); // Defina a data de início aqui
        const agora = new Date();
        
        var hora = document.getElementById("horaL2")
    
        // Calcula a diferença em milissegundos
        const diferenca = agora - dataInicio;
        
        // Converte a diferença para dias, horas, minutos e segundos
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
        
        // Formata o contador
        const contadorFormatado = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
        console.log(contadorFormatado);
        // Se quiser exibir na página, use: document.body.innerText = contadorFormatado;
        // document.getElementById("horaL1").innerHTML = contadorFormatado;
        hora.innerHTML = contadorFormatado
        }
        
        function atualizarContador3() {
            const dataInicio = new Date('2024-12-26T21:50:00'); // Defina a data de início aqui
            const agora = new Date();
            
            var hora = document.getElementById("horaL3")
        
            // Calcula a diferença em milissegundos
            const diferenca = agora - dataInicio;
            
            // Converte a diferença para dias, horas, minutos e segundos
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
            
            // Formata o contador
            const contadorFormatado = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
            console.log(contadorFormatado);
            // Se quiser exibir na página, use: document.body.innerText = contadorFormatado;
            // document.getElementById("horaL1").innerHTML = contadorFormatado;
            hora.innerHTML = contadorFormatado
            }

            function atualizarContador4() {
                const dataInicio = new Date('2025-01-19T03:45:00'); // Defina a data de início aqui
                const agora = new Date();
                
                var hora = document.getElementById("horaL4")
            
                // Calcula a diferença em milissegundos
                const diferenca = agora - dataInicio;
                
                // Converte a diferença para dias, horas, minutos e segundos
                const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
                
                // Formata o contador
                const contadorFormatado = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
                console.log(contadorFormatado);
                // Se quiser exibir na página, use: document.body.innerText = contadorFormatado;
                // document.getElementById("horaL1").innerHTML = contadorFormatado;
                hora.innerHTML = contadorFormatado
                }

                function atualizarContador5() {
                    const dataInicio = new Date('2025-02-09T22:00:00'); // Defina a data de início aqui
                    const agora = new Date();
                    
                    var hora = document.getElementById("horaL5")
                
                    // Calcula a diferença em milissegundos
                    const diferenca = agora - dataInicio;
                    
                    // Converte a diferença para dias, horas, minutos e segundos
                    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
                    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
                    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
                    
                    // Formata o contador
                    const contadorFormatado = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
                    console.log(contadorFormatado);
                    // Se quiser exibir na página, use: document.body.innerText = contadorFormatado;
                    // document.getElementById("horaL1").innerHTML = contadorFormatado;
                    hora.innerHTML = contadorFormatado
                    }

                    setInterval(atualizarContador5, 1000);
        
        // Inicia imediatamente
        atualizarContador5();

                setInterval(atualizarContador4, 1000);
        
        // Inicia imediatamente
        atualizarContador4();


            setInterval(atualizarContador3, 1000);
        
        // Inicia imediatamente
        atualizarContador3();
        // Atualiza o contador a cada segundo
        setInterval(atualizarContador2, 1000);
        
        // Inicia imediatamente
        atualizarContador2();
    // Atualiza o contador a cada segundo
    setInterval(atualizarContador, 1000);
    
    // Inicia imediatamente
    atualizarContador();





// const toggle = document.querySelector('.custom-checkbox');
// const toggleJanela = document.querySelector('.toggleJanela');

// toggle.addEventListener('click', function() {
//   toggle.classList.toggle('active');
// });