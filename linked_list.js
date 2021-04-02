function runProgram(input){
    let input_arr = input.trim().split("\n")
    let index = input_arr[input_arr.length -1]
    input_arr.pop()
    let data = input_arr[input_arr.length - 1]
    input_arr.pop()

    // node creation constructor
    class node{
        constructor(data, next = null){
            this.data = data,
            this.next = next
        }
    }

    // linklist creation constructor with all methods
    class linked_list{
        constructor(){
            this.head = null,
            this.length = 0
        }

        // insert element
        insert(data){
            // check if already element exists or not

            // if not, create node and make it head and increase size
            if(this.length == 0){
                this.head = new node(data, null)
                this.length++
            }

            // if exists then create node and add it to end and increase size
            else{
                let current = this.head

                while(current.next){
                    current = current.next
                }
                current.next = new node(data, null)
                this.length++
            }
        }

        // insert elemnet at specific index
        insertAt(data, index){
            // check if index within the range

            // if not return
            if(index < 0 && index >= this.length){
                return
            }

            // if within range 
            else{
                let current = this.head
                let count = 0
                // traverse untill that index - 1
                while(count < index -1){
                    current = current.next
                    count ++
                }
                // create node and set next as previous(current) elements next
                let to_insert = new node(data, null)
                to_insert.next = current.next
                // set created element as previous(current) elements next
                current.next = to_insert
                this.length++
            }
        }

        // traverse and print list
        printElements(){
            let current = this.head
            let index = 0
            while(current){
                console.log(`data : ${current.data}, index : ${index++}`)
                current = current.next
            }
        }
    }

    let ll1 = new linked_list()

    for(let i = 1; i < input_arr.length; i++){
        ll1.insert(input_arr[i])
    }


    ll1.insertAt(data, index)
    ll1.printElements()
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`3
16
13
7
1
2`)