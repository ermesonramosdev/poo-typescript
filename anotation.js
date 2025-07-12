/*
    ! POO com TypeSript - Programação orientada a objetos

    * 4 pilares do POO
        ? 1. Abstração: 
            -> Transforma o nosso problema do mundo real mais próximo possivel para ánalise e desenvolvimento na programção.

        ? 2. Encapsulamento:
            -> Conforme o próprio nome sugere, a proposta é isolar o máximo possível as nossas classes, de forma a esconder detalhes de funcionamento interno.

            ->Visa aumentar a flexibilidade, melhorar a manunteção e aumentar a extensibilidade do software.

            ? 1.1. Modificadores de acesso.
                -> Modificadores de acessos nos permitem configurar a visibilidade dos nossos atributos, classes e métodos.


        ? 3. Herança:
            -> Herança é o conceito que permite uma classe "filha" herdar os atributos e métodos de uma classe "pai".

        ? 4. Polimorfismo:
            -> Em POO, é a capacidade de um método se comportar de maneiras diferentes dependendo do contexto, geralmente usando herança.

    * Estrutura
        ? 1. Classe:
            -> Abstração do que há em comum(em termos de características e comportamentos) a um conjunto de objetos.
            ? 1.1. Atributos:
                -> Características.
            ? 2.1. Métodos:
                -> Comportamentos.

        ? 2. Objeto:
            -> Combina a estrutura de dados(atributos) e o comportamento dos dados(operações/métodos) em uma única entidade.

            -> Um objeto pode ser definido como um conceito, uma abstração, algo com limites nítidos e significado em relação ao mundo.

            -> Onjetos servem como uma base real para a elaboração de um sistema consistente com uma realidade modelada.

        ? 3. Classe e Objetos
            1. Classe é o que projetamos.

            2. Objeto é o que criamos a partir da classe.

            3. As classes estão para os objetos assim como as plantas arquitetônicas estão para as casas.

        ? 4. Modificadores de acesso.

            * Métodos privados.

                ? 1. PUBLIC (+)
                    -> Acessível de qualquer lugar: dentro ou fora da classe.
                    -> Padrão se nenhum modificador for especifico.

                ? 2. PRIVATE (-)
                    -> Acessível apenas dentro da própria classe.
                    -> Ideal para proteger atributos ou métodos que não deve ser acessados fora.

                ? 3. PROTECTED (#)
                    -> Acessível dentro da classe e me classes filhas (herança).
                    -> Não pode ser acessado diretamente por instânciar externas.

                    ! 🧠 Dicas importantes:
                        1. Use private para proteger dados sensíveis.
                        2. Use protected quando quiser que subclasses tenham acesso, mas não o mundo externo.
                        3. Use public para métodos e atributos que precisam ser expostos.

            * Métodos de acesso.

                ? 1. GETTER(Acessador)
                    -> Permite ler o valor de um atributo como se fosse uma propriedade, mas com lógica embutida se necessário.
                    -> Sintaxe: get nomeDoMetodo()

                    * Características:
                        1. Retornam o tipo do atributo que será provido o acesso;
                        2. Não recebe parâmentros
                        3. Seu nome é composto pelo prefixo "get" seguido do nome atribuido que acesso será provido.

                ? 2. SETTER(Modificador).
                    -> Permite alterar o valor de uma atributo, mas com regras de validação ou lógica. 
                    -> Sintaxe: set nomeDoMetodo(valor: tipo).

                    * Características 
                        1. Não possuem retorno.
                        2. Recebe por parâmentros o valor a ser inserido no atributo.
                        3. Seu nome é composto pelo prefixo "set" seguido do nome do atributo que iremos possibilitar a modificação.

                    ! 💡Regras e Boas Práticas
                        1. Usar get e set mantém o princípio do encapsulamento.
                        2. Nomeie a propriedade privada com um prefixo como _ para evitar conflito com o nome do getter/setter.
                        3. Eles são usados como propriedades, não como funções.

        ? Herança 
            -> Herança é um dos pilares da POO. Ela permite que uma classe (filha) herde características (atributos e métodos) de outra classe (pai). Isso evita repetição de código e promove reutilização e organização.



        * Obs: 
            1. Toda vez que pensar em ler dados da classe - use parâmentros.
            2. Toda vez que pensar em imprimir dados da classe - use return.
*/