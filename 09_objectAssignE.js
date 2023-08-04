






const sbiBank = {

    bankName: "State Bank of India",
    location: "Satara",
    accNumber: "53626412563",
    ifsc:       "SBIN000967",
    interestRate: 8.4 ,

    showDetails(){
        console.log(`Details of SBI Bank--> Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accNumber}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
}

const axisBank = {
    
    bankName: "AXIS Bank",
    location: "Nagpur",
    accNumber: "53626412564",
    ifsc:       "AXIS000968",
    interestRate: 9.5 ,

    showDetails(){
        console.log(`Details of Axis Bank--> Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accNumber}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
    
}

const hdfcBank = {
    
    bankName: "HDFC Bank",
    location: "Thane",
    accNumber: "53626412565",
    ifsc:       "HDFC000969",
    interestRate: 9 ,

    showDetails(){
        console.log(`Details of HDFC Bank--> Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accNumber}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
    
}

const yesBank = {
    
    bankName: "YES Bank",
    location: "Solapur",
    accNumber: "53626412566",
    ifsc:       "YESB000970",
    interestRate: 8.2 ,

    showDetails(){
        console.log(`Details of Yes Bank--> Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accNumber}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
    
}


//console.log(sbiBank);
sbiBank.showDetails();


console.log(`----------------------------------`);
axisBank.showDetails();


console.log(`----------------------------------`);
hdfcBank.showDetails();


console.log(`----------------------------------`);
yesBank.showDetails();



