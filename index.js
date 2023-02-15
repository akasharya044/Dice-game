function dicecall_player1()
{
        a=Math.random(0-6)*6+1;
        x=Math.floor(a);
        
        if(x==1)
        {
          document.getElementById("x").innerHTML="<img src='images/dice1.png'></img>"
        }
        else if(x==2)
        {
          document.getElementById("x").innerHTML="<img src='images/dice2.png'></img>"
        }
        else if(x==3)
        {
             document.getElementById("x").innerHTML="<img src='images/dice3.png'></img>"
        }

        else if(x==4)
        {
          document.getElementById("x").innerHTML="<img src='images/dice4.png'></img>"
        }
        
        else if(x==5)
        {
          document.getElementById("x").innerHTML="<img src='images/dice5.png'></img>"
        }
        else
        {
        document.getElementById("x").innerHTML="<img src='images/dice6.png'></img>"
        }

}
dicecall_player1()

function dicecall_player2()
{
        b=Math.random(0-6)*6+1;
        y=Math.floor(b);
        
        if(y==1)
        {
          document.getElementById("y").innerHTML="<img src='images/dice1.png'></img>"
        }
        else if(y==2)
        {
        
          document.getElementById("y").innerHTML="<img src='images/dice2.png'></img>"
        }
        else if(y==3)
        {
             document.getElementById("y").innerHTML="<img src='images/dice3.png'></img>"
        }

        else if(y==4)
        {
          document.getElementById("y").innerHTML="<img src='images/dice4.png'></img>"
        }
        
        else if(y==5)
        {
          document.getElementById("y").innerHTML="<img src='images/dice5.png'></img>"
        }
        else
        {
        document.getElementById("y").innerHTML="<img src='images/dice6.png'></img>"
        }

}

dicecall_player2()

function winner()
{
            if(x==y)
            {
              document.getElementById("win").innerHTML="Game Tie No One Wins"
            }
            else if(x>y)
            {
              document.getElementById("win").innerHTML="Player 1 Wins"
            }
            else{
              document.getElementById("win").innerHTML="Player 2 Wins"
            }

}
winner()