<script>
export default {
  render(createElement){
        let pontuacao = this.$props.pontuacao
        let inteiro = Math.trunc(pontuacao);
        let fracao = Math.trunc((pontuacao - inteiro) * 100);
        let spanPontuacao = createElement('span',{'class' : 'btn btn-warning btn-sm star'}, [createElement('b',pontuacao)])
        let starFull = createElement('i',{'class' : 'fa fa-star star'})
        let starhalf = createElement('i',{'class' : 'fa fa-star-half-o star'})

        let filhos = [spanPontuacao];
        for (var i = 1; i <= inteiro; i++) {
            filhos.push(starFull);
        }
        if(fracao > 1){
            filhos.push(starhalf)
        }
        return createElement('div',{ 'class': 'row'}, filhos)
        
    },
    props : {
        pontuacao : {
            type : Number,
            required : true
        }
    }
}
</script>
<style scopedSlots>
    .star{
        margin: 8px;
        color: blue;
    }
</style>

