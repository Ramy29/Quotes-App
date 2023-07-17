function Text(){
var names = ["Oscar Wilde"
," Marilyn Monroe"
," Albert Einstein"
,"Frank Zappa"
,"Marcus Tullius Cicero"
,"Bernard M. Baruch"
,"William W. Purkey"
,"Dr. Seuss"
," Mae West"
,"Mahatma Gandhi"]
var text = ["“Be yourself; everyone else is already taken.”"
,"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
,"“So many books, so little time.”"
,"“A room without books is like a body without a soul.”"
,"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
,"“You only live once, but if you do it right, once is enough.”","“Be the change that you wish to see in the world.”"
,"“In three words I can sum up everything I've learned about life: it goes on.”"
,"“If you tell the truth, you don't have to remember anything.”"
,"“Always forgive your enemies; nothing annoys them so much.”"
,"“Without music, life would be a mistake.”"
,"“I am so clever that sometimes I don't understand a single word of what I am saying.”"
,""
]

var num =Math.floor(Math.random()*names.length)
/*
console.log(names[3])
console.log(text[3])
*/
document.getElementById("test").innerHTML=(names[num])
document.getElementById("demo").innerHTML=(text[num])

}
Text()
