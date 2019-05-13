function makeDna(lenght) {
    var dna = '';
    var nucleotides = 'ACTG';
    for (var i = 0; i < lenght; i++ ) {
        dna += nucleotides.charAt(Math.floor(Math.random() * 4)); 
    }
    return dna;
}

var randomDNA = new Vue({
    el: '#DNA',
    data: {
        random_DNA_Sequence: makeDna(8)
    },
    methods: {
        regenerate: function () {
            this.random_DNA_Sequence = makeDna(8)
        }
    }
})