function Timer(){
    this.display; // (Label)
    this.reset; // (Button)
    this.start; // (Button)
    this.stop; // stop / pause (Button)
    this.annotation; // (TextBox)
    this.nowTime; // (Date)
    this.textBoxHr; // (Textarea)
    this.textBoxMin; // (textarea)
    this.labelHr; // (Label)
    this.labelMin; // (Label)
    this.label5; // (Label)
    this.destination; //(Date)
    this.initialization = function(){ // (void)
        
        createP('');
        
        display = document.createElement("label");
        document.body.appendChild(display);
        display.innerHTML = "00 : 00 : 00";
        display.style.fontSize = "72px";
        
        this.textBoxHr = document.createElement("textarea");
        document.body.appendChild(this.textBoxHr);
        this.textBoxHr.innerHTML = "0";

        this.labelHr = document.createElement("label");
        document.body.appendChild(this.labelHr);
        this.labelHr.innerHTML = "Hours";

        this.textBoxMin = document.createElement("textarea");
        document.body.appendChild(this.textBoxMin);
        this.textBoxMin.innerHTML = "0";

        this.textBoxMin = document.createElement("label");
        document.body.appendChild(this.textBoxMin);
        this.textBoxMin.innerHTML = "Minutes";

        this.reset = document.createElement("button");
        document.body.appendChild(this.reset);
        this.reset.innerHTML = "Reset";
        this.reset.addEventListener("click", this.Reset);
        
        this.start = document.createElement("button");
        document.body.appendChild(this.start);
        this.start.innerHTML = "Start";

        this.stop = document.createElement("button");
        document.body.appendChild(this.stop);
        this.stop.innerHTML = "Stop";

        createP('');

        this.label5 = document.createElement("label");
        document.body.appendChild(this.label5);
        this.label5.innerHTML = "Destination: ";

        createP('');

        this.annotation = document.createElement("textarea");
        document.body.appendChild(this.annotation);
        this.annotation.innerHTML = "註解";

        this.nowTime = new Date();

        this.destination = new Date();
        console.log(this.textBoxHr);
    }

    this.Reset = function(){ // onclick event (void)
        console.log(this.textBoxHr);
        console.log("Reset");
        this.nowTime = new Date();
        var nt = this.nowTime.getTime();
        console.log("nt = " + nt);
        console.log(this.textBoxHr);
        console.log(parseInt(this.textBoxHr));
        nt += parseInt(this.textBoxHr)*60*60*1000 + parseInt(this.textBoxMin)*60*1000;
        console.log("nt = " + nt);
        this.destination = new Date();
        this.destination.setDate(nt);
        console.log(this);
        console.log(this.destination);
    }

    this.show = function(){ // update screen (void)

        this.label5.innerHTML = this.destination;
    }
}