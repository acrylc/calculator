calculator = {};

calculator.init = function(){

    this.prevVal = 0; //Init previous value to 0
    this.currVal = 0;
    this.prevOp = '+'; //Init previous operation to 0

    var that = this;
    $('.arith').on('click', function(){
        that.setOp( $(this).html() );
    });
    $('.num').on('click', function(){
        that.setVal( Number($(this).html()) );
        console.log('clicked num');
    });
    $('.eq').on('click', function(){
        that.calculate();
    });
}


calculator.setOp = function( op ){
    if (op == '+' || op == '-' || op == '*' || op == '/'){
        this.currOp = op;
        this.calculate( op );
    }
}

calculator.setVal = function ( num ){
    this.currVal = this.currVal*10+ num;
}

calculator.calculate = function( op ){
    switch(this.prevOp){
        case ('+') : 
            this.prevVal = this.prevVal + this.currVal;
            break;        
        case ('-') : 
            this.prevVal = this.prevVal - this.currVal;
            break;
        case ('/') :
            if (this.currVal == 0){
                $('#screen').html();
                alert('Cannot divide by zero.'); 
                currVal = 0;
                prevVal = 0;
                prevOp='+';
            }
            else
                this.prevVal = this.prevVal / this.currVal;
            break;        
        case ('*') : 
            this.prevVal = this.prevVal * this.currVal;
            break;    
    }
    this.prevVal = Math.round(this.prevVal);
    $('#screen').html(this.prevVal);
    this.currVal = 0;
    if ( op == undefined )
{    this.prevVal = 0; //Init previous value to 0
    this.currVal = 0;
    this.prevOp = '+'; //Init previous operation to 0
}    else 
        this.prevOp = op;
}

calculator.init();
