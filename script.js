var names = []
var points = []
var final = []
var dis_i = 0
var dis_x = 0
var num_names = prompt("How many Players (3-5)")
var i = 0
var n, x

parseInt(num_names)

while (i < num_names) {
    dis = i + 1
    name[i] = prompt("Player "+dis+" Name")
    points[i] = 0
    
    for (n = 0; n < 10; n + 1) {
        points[i] = points[i] + pointGen()
        console.log("Working PointGen: "+n)
    }

    final.push({"name": name[i], "points": points [i]})
    console.log("Working Prompt: "+i)
    i = i + 1
}

// for (i = 0; i < num_names; i = i + 1) {
//     dis = i + 1
//     name[i] = prompt("Player "+dis+" Name")
//     points[i] = 0
    
//     for (n = 0; n < 10; n + 1) {
//         points[i] = points[i] + pointGen()
//         console.log("Working PointGen: "+n)
//     }

//     final.push({"name": name[i], "score": score[i]})
//     console.log("Working Prompt: "+i)
// }

console.log(final)

final.sort(function (a, b) {
    return a.score - b.score 
})

document.write("<H1> Leaderboard: </H1>")
document.write("<BR>")

for (x = 0; x < final.length; x = x + 1) {
    dis_x = x + 1
    document.write(dis_x + ". " + final[x].name + " | Points: " + final[x].point)
    document.write("<BR>")
}

function pointGen() {
    var rand = Math.random() * 4
    rand = Math.round(rand + 0.5)
    
    if (rand < 1) {
        rand = 0
    }

    return rand
}
