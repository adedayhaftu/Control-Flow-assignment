
//num1

const daysOfDelivery = (days) => {
    days.forEach(day => {
        switch (day) {
            case 'Mon':
                console.log(`Tv delivery is scheduled on ${day}`);
                break;
            case 'Tue':
                console.log(`Cloth delivery is scheduled on ${day}`);
                break;
            case 'Wed':
                console.log(`Home paint delivery is scheduled on ${day}`);
                break;
            case 'Thr':
                console.log(`Furniture delivery is scheduled on ${day}`);
                break;
            case 'Fri':
                console.log(`Electronic delivery is scheduled on ${day}`);
                break;
            default:
                console.log('Nothing is scheduled on this day');
                break;
        }
    });
};
const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
daysOfDelivery(days);

//num2

function arrayOfBooksStatuses(books) {
    for (let i = 0; i < books.length; i++) {
        if (books[i] == 'Available') {
            console.log('Ready to lend');
        }
        else {
            console.log('Checked out');
        }
    }

}
const books = ['Available', 'Borrowed', 'Available']
arrayOfBooksStatuses(books);

//num3

function customerAges(ages) {
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Adult');
        }
        else {
            console.log('Minor');
        }
    }
};
const ages = [28, 12, 34, 18, 10];
customerAges(ages);

//num4

function countdownOfLives() {
    let numberOfLives= 5;
    while (numberOfLives>= 1) {
        console.log(`Number of lives are ${numberOfLives}`);
        numberOfLives--
    }
    console.log('Game over!')
}
countdownOfLives();

//num5

const userFeedback= (comments) =>{
    let i=0;

    do{
        if(comments[i]){
            console.log(comments[i]);
            i++ 
        }
        else{
            break;
        }
       
        
    }    while(i<comments.length)
}
const comments=['nice','very good','bad','Not interesting']
userFeedback(comments);

//num6

const userLoginStatuses = (login) => {
    login.forEach(logged => {
        switch (logged) {
            case 'Logged in':
                console.log('Welcome back!');
                break;
        default:
                console.log('Please log in');
                break;
        }
    });
};
const login = ['Logged in', 'Logged out', 'Logged out', 'Logged in', 'Logged out'];
userLoginStatuses(login);

//num7

const supportTicketPriorities = (supportTickets) => {
    supportTickets.forEach(supportTicket => {
        switch (supportTicket) {
            case 'Low':
                console.log('Should address slowely');
                break;
            case 'Medium':
                console.log('Should addreess a little slower');
                break;
            case 'High':
                console.log('Should address quickly');
                break;
            default:
                    console.log('Should address at last');
                    break;
            }
        });
    };
    const supportTickets = ['High', 'Low', 'Medium', 'Low', 'Lowest'];
    supportTicketPriorities(supportTickets);

//num8

    function quizCountdown() {
    let quizNumbers= 10;
    while (quizNumbers>= 1) {
        console.log(`${quizNumbers} seconds left`);
        quizNumbers--
    }
    console.log('Time is up!')
}
quizCountdown();

