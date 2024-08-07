function calculateMoney(ticketSale){
    const guardMan = 500;
    const staffLunch = 8 * 50;
    const totalTicket = ticketSale * 120;
    const remainingMoney = totalTicket - (guardMan + staffLunch);
    if(ticketSale >= 0){
        return remainingMoney;
    }else{
        return 'Invalid Number';
    }
}

const totalIncome = calculateMoney(10);
console.log(totalIncome);
