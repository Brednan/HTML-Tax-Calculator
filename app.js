var calculateMode

window.onload = function () {
    document.getElementById('selectMode').style.display='none'
    calculateMode = 'Canadian'
    document.getElementById('ModeLabel').innerHTML = "Canadian"
}

function ClearScreen(ID1, ID2){
    ID1.value = ''
    ID2.value = ''
}

function setDropDownVisibility(){
    if(document.getElementById('selectMode').style.display == 'none'){
        document.getElementById('selectMode').style.display = 'block'
    }
    else if(document.getElementById('selectMode').style.display == 'block'){
        document.getElementById('selectMode').style.display = 'none'
    }
}
function CanadianMode(){
    calculateMode = 'Canadian'
    document.getElementById('ModeLabel').innerHTML ='Canadian'
}
function AmericanMode(){
    calculateMode = 'American'
    document.getElementById('ModeLabel').innerHTML = 'American'
}
function Calculate(income){
    const incomeInt = parseFloat(income)
    if(calculateMode == 'Canadian'){
       CanadianCalculate(incomeInt)
    }
    else if(calculateMode == 'American'){
        AmericanCalculate(incomeInt)
    }
}
function CanadianCalculate(income){
    if(income <= 48535){
        const difference = income * 0.15
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 48535 && income <= 97069){
        const difference = income * 0.205
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 97069 && income <= 150473){
        const difference = income *0.26
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 150473 && income <= 214368){
        const difference = income * 0.29
        consttotal = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 214368){
        const difference = income * 0.33
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
}

function AmericanCalculate(income){
    if(income <= 9875){
        const difference = income * 0.10
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 9875 && income <= 40125){
        const difference = income * 0.12
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 40125 && income <= 85525){
        const difference = income * 0.22
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 85525 && income <= 163300){
        const difference = income * 0.24
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 163300 && income <= 207350){
        const difference = income * 0.32
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 207351 && income <= 518400){
        const difference = income * 0.35
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
    else if(income > 518400){
        const difference = income * 0.37
        const total = income - difference
        const totalCut = total.toString().split('.')
        if(totalCut[1]){
            if(totalCut[1].length > 2){

                document.getElementById('Total').value = '$' + totalCut[0] + '.' +totalCut[1].substring(0,2)
            }
            else{
                document.getElementById('Total').value = '$' + total.toString()
            }
        }
        else{
            document.getElementById('Total').value = '$' + total.toString()
        }
    }
}