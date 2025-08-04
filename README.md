# 🧮 Calculadora de Calorias Diárias:

Uma aplicação web simples que permite calcular o gasto calórico diário com base em informações como peso, altura, sexo, frequência de treino e objetivo (cutting, bulking ou manutenção).

## 📌 Funcionalidades:

- Entrada de dados para peso, altura, sexo, objetivo e rotina semanal;
- Validação automática dos campos do formulário.
- Cálculo do BMR (Taxa Metabólica Basal) com a fórmula de Mifflin-St Jeor.
- Ajuste com base no nível de atividade física;
- Resultado exibido com estimativa calórica diária personalizada.

## 💡 Tecnologias Utilizadas:

- **HTML5** – Estrutura da página
- **CSS3** – Estilização responsiva e moderna com variáveis CSS
- **JavaScript** – Lógica do cálculo e manipulação do DOM
- **Google Fonts** – Tipografia com a fonte Inter

## 🛠 Como Usar

1. Clone ou baixe este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

## 📌 Cálculo Utilizado:

A fórmula usada é a de Mifflin-St Jeor:
Para homens: BMR = 10 × peso + 6.25 × altura − 5 × idade + 5
Para mulheres: BMR = 10 × peso + 6.25 × altura − 5 × idade − 161

Em seguida, o valor é ajustado com base no nível de atividade (fator entre 1.2 e 1.9), e multiplicado por:
0.8 para cutting (déficit calórico)
1.0 para manutenção (off season)
1.2 para bulking (superávit calórico)

## ✨ Autor:
Desenvolvido por Rafael Silva
