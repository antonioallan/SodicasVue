<script>
export default {
  render(createElement){
        let pontuacao = this.$props.pontuacao
        let inteiro = Math.trunc(pontuacao);
        let fracao = Math.trunc((pontuacao - inteiro) * 100);
        let spanPontuacao = createElement('span',{'class' : 'tag is-warning'}, [createElement('b',pontuacao)])
        let starFull = createElement('span', { 'class' : 'icon has-text-info'}, 
            [createElement('i',{'class' : 'fa fa-star'})])
        let starhalf = createElement('span', { 'class' : 'icon has-text-info'}, 
            [createElement('i',{'class' : 'fa fa-star-half-o'})])

        let filhos = [spanPontuacao];
        for (var i = 1; i <= inteiro; i++) {
            filhos.push(starFull);
        }
        if(fracao > 1){
            filhos.push(starhalf)
        }
        return createElement('div',{ 'class': 'columns'}, filhos)
        
    },
    props : {
        pontuacao : {
            type : Number,
            required : true
        }
    }
}
</script>
