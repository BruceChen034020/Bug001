function Timer(){
    this.reset; // (Button)

    this.textBoxHr; // (Textarea)

    this.initialization = function(){ // (void)
        
        createP('');
        

        
        this.textBoxHr = document.createElement("textarea");
        document.body.appendChild(this.textBoxHr);
        this.textBoxHr.innerHTML = "0";



        this.reset = document.createElement("button");
        document.body.appendChild(this.reset);
        this.reset.innerHTML = "Reset";
        this.reset.addEventListener("click", this.Reset);



        console.log(this.textBoxHr);
    }

    this.Reset = function(){ // onclick event (void)
        console.log("Reset clicked");
        console.log(this.textBoxHr);
        
    }


}