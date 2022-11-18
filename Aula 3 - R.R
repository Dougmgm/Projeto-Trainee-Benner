#Aula 3 - R

setwd("C:/Users/Master/Desktop/Intro-R")

#Os exemplos serão feitos com o banco de dados do Wooldridge

#########################################################
#EXEMPLO 1: Estimação de modelos com funções quadráticas
#########################################################

#Em Economia, é comum usarmos funções quadráticas para captar os efeitos
#marginais crescentes ou decrescentes

#Seja o salário em função da experiência...sabemos que à medida que a 
#experiência aumenta o salário tende a aumentar, porém, espera-se que há um
#limite a partir do qual o aumento da experiência deixa de impactar 
#positivamente o salário. Desse modo, temos que estimar modelos
#do tipo: salário em função da experiência e da experiência ao quadrado
#Veja a seguir:

#Vamos usar o banco de dados do Wooldridge
#Para instalat pela 1ª vez, use a sintaxe:

install.packages("wooldridge")

#Se já tiver instalado esse pacote do wooldridge, faça apenas a leitura do banco de dados

#Fazendo a leitura dos dados Wooldridge

library(wooldridge)

#Utilizando o banco de dados wage1

data("wage1")

#Estimando o modelo salário hora (wage) em função da experiência (exper) e da
#experiência ao quadrado (exper^2): wage = b1 + b2exper + b3 exper^2
#Atente para a forma de aplicar expoentes no R

reg1 <- lm(wage ~ exper + I(exper^2), data=wage1)
summary(reg1)

#Outra forma de pedir a regressão (mais direta; mostra apenas os coeficientes estimados)

lm(wage~exper +  I(exper^2),data=wage1)

#Neste exemplo, o coeficiente de exper é positivo e de exper^2 é negativo
#Isso significa que a função quadrática tem um formato parabólico
#O aumento da experiência aumenta o salário hora até um certo ponto
#Após esse ponto, o aumento da experiência tem retorno zero

#Em outras palavras, exise um valor positivo da experiência, no qual o efeito
#da experiência sobre o salário hora é zero: antes desse ponto exper tem um efeito 
#positivo sobre o salário
#Neste exempo, esse valor crítico é dado por: exper* = |beta2^/2beta3^|
#O resultado estimado foi: ^wage = 3,73 + 0,298exper - 0,00061exper^2
#Assim:
# exper* é 0,298/]2(0,0061)]=~24,4
#O retorno da experiência passa a ser zero por volta de 24,4 anos de experiência

#############################
#Fazendo previsão (predições)
#############################

#Calcule o salário hora médio de uma pessoa com 5 anos de experiência

#Informe o valor para o regressor, neste caso '5'
#Criei uma notação chamada 'prev'e informe ao R para usar o data.frame
#e insira o valor de 5 para prever o salário hora médio
#Em seguida, use o comando predict, informe o nome do modelo e peça
#para fazer a previsão para a notação criada (prev)

prev <-data.frame(exper=5)
predict(reg1,prev)

#Neste caso, uma pessoa com 5 anos de experiência tem um salário
#hora previsto de $ 5,06

#Previsão do salário hora para a pessoa que tem 8 anos de experiência
#O valor previsto para 8 anos de experiência é cerca de $ 5,72

prev <-data.frame(exper=8)
predict(reg1,prev)


#Para aplicar termos de ordem maior no R, por exemplo um modelo cúbico:
#em que y é função de x, x ao quadrado e x ao cubo:

# y = b0 + b1x + b2x^2 + b3x^3 

#Para este exemplo acima, usamos a seguinte sintaxe:

#y ~ x + I(x^2) + I(x^3)

#Fazendo outro exemplo de previsão, com o banco de dados gpa2

#Chame o banco de dados 

data("gpa2")


#Estimando a nota média no ensino superior (colgpa)
#em função de escore(sat), hsperc(nota do ensino médio) e 
#hsize(tamamho da turma), incluindo o efeito quadrático de hsize

reg2 <- lm(colgpa ~ sat+hsperc+hsize + I(hsize^2), data=gpa2)
summary(reg2)

#Fazendo a previsão da nota média de uma aluno do ensino superior
#quando seu score for 1200, nota no ensino médio for 30 e o tamanho da 
#turma for 5

prev2<-data.frame(sat=1200, hsperc=30, hsize=5)
predict(reg2,prev2)

#O valor previsto da nota é 2,700075

#############################################################
#Para estimar o intervalo de confiança de 95% para a previsão 
#############################################################

#Estima-se os limites inferior e superior, entre os quais a previsão pode variar
#Veja a sintaxe abaixo:

p4redict(reg2, prev2, interval = "confidence")

#Veja que o intervalo de confiança de 95% é: [2,6611;2,7390]

########################################################
#Para estimar o intervalo de confiança da previsão a 99%
########################################################

predict(reg2, prev2, interval = "confidence", level=0.99)


#Veja que o intervalo de confiança de 99% é: [2,64885;2,751301] 

################################################################################
#Estimando simultaneamente 3 previsões (para valores diferentes dos regressores)
#e seus respectivos intervalos de confiança a 95%
################################################################################

prev2 <- data.frame(sat=c(1200,900,1400), hsperc=c(30,20,5),hsize=c(5,3,1))                   
prev2

predict(reg2,prev2)

predict(reg2, prev2, interval = "confidence")

########################################################################
#Estimando 2 modelos diferentes e mostrando seus resultados numa tabela
########################################################################

#É preciso instalar o pacote 'stargazer' e depois fazer a leitura do mesmo

install.packages("stargazer")

library(stargazer)

#Estimam-se os dois modelos (ou mais), os quais foram chamados de model1 e model2

model1 <- lm(colgpa ~ sat+hsperc+hsize + I(hsize^2), data=gpa2)
model2 <-lm(colgpa ~ sat+hsperc+hsize, data=gpa2)

#Em seguida use a sintaxe abaixo, em que se pede para mostrar
#o número de observações e o R ao quadrado

stargazer(list(model1, model2), type="text", title="Resultados da Regressão",keep.stat=c("n","rsq"))

#Na janela console, de resultados, selecione a tabela e cole no word
#Para que a tabela fique organizada, use fonte courier new 8 ou 9

##########################################################################
#Para calcular vários médios, mediana, máximo e mínimo de alguma variável
#do banco de dados, use a sintaxe
##########################################################################

mean(gpa2$hsize)
median(gpa2$hsize)
mean(gpa2$sat)
median(gpa2$sa)
max(gpa2$sat)
min(gpa2$sat)
