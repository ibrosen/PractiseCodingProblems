




def doubleIntList(intList):
    for i in range(len(intList)):
	    intList[i] *=2
    return intList

		
def balanceList(intList):

    reverseList = intList[::-1]
    print(reverseList)
    for i in range(len(reverseList) -1):
        if(len( str(reverseList[i]) ) > 1):
            reverseList[i] = reverseList[i] % 10
            reverseList[i + 1] += 1

    print(reverseList)
    
    print(reverseList)
    return reverseList[::-1]
	
	

pow = 1000
num = [0] * pow
num[-1] = 1
for i in range(pow):
    num = doubleIntList(num)
    num = balanceList(num)
	
print(sum(num))

