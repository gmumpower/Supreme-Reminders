function demo_populate_existing_reminders() {
    
    // load localStorage with demo messages/adressees.
    const demo_messages = [9];
    demo_messages[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";  demo_messages[1] = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    demo_messages[2] = "Ut enim ad minim veniam.";
    demo_messages[3] = "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
    demo_messages[4] = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
    demo_messages[5] = "Excepteur sint occaecat cupidatat non proident";
    demo_messages[6] = "Sunt in culpa qui officia deserunt mollit anim id est laborum";
    demo_messages[7] = "Elementum curabitur vitae nunc sed";
    demo_messages[8] = "Ellentesque nec nam aliquam sem et.";
    //demo
    const demo_addressee = [9];
    demo_addressee[0] = "@Elijah";
    demo_addressee[1] = "@Willaim";
    demo_addressee[2] = "@James";
    demo_addressee[3] = "@Benjamin";
    demo_addressee[4] = "@Charlotte";
    demo_addressee[5] = "@Sophia";
    demo_addressee[6] = "@Amelia";
    demo_addressee[7] = "@Isabella";
    demo_addressee[8] = "@Olivia";
    //demo
    const recalls = [9];
    for(var i = 0; i < 9; i++){
        //demo collision avoidance. 
        var dtg = moment().add(i, 'seconds').format('MMMM Do YYYY, h:mm:ss a');
        //keys are prefixed with "*SR*" so that they are searchable. 
        var key = "*SR*" + dtg;
        //demo_addressee and demo_meassage are concatenated with the split token "*SP*".
        localStorage.setItem(key, demo_addressee[i] + "*SR*" + demo_messages[i]);
    }
    //Search localStorage for all keys prefixed with "*SR*".
    var j = 0;
    for(var i = 0; i < localStorage.length; i++){
        var currentKey = localStorage.key(i);
        if(currentKey.substring(0,4) == "*SR*"){
            recalls[j++] = currentKey;
        }
    }
    for(var i = 0; i < 9; i++){
        //Strip "*SR*" prefix and post to date column.
        document.getElementById("line-"+i.toString()).children[0].innerHTML = recalls[i].split("*SR*")[1];
        var record = localStorage.getItem(recalls[i]);
        //Split record at "*SR*" token, put addressee and message in respective columns.
        document.getElementById("line-"+i.toString()).children[1].innerHTML = record.split("*SR*")[0];
        document.getElementById("line-"+i.toString()).children[2].innerHTML = record.split("*SR*")[1];
        console.log("line-"+i.toString());
    }
}

document.onload=demo_populate_existing_reminders();