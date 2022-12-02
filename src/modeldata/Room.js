class Room {
    constructor(ownerName,guestAmount,ownerEmail,ownerPhone,checkInDate,checkOutDate,totalPrice){
        this.ownerName = ownerName;
        this.guestAmount = guestAmount;
        this.ownerEmail = ownerEmail;
        this.ownerPhone = ownerPhone;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.totalPrice = totalPrice;
    }
}

export default Room;