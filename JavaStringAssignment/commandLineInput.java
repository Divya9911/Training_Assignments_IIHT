class commandLineInput{
	public static void main(String[] args) {
		int sum=0;
		int i;
		if(args.length==1)
		{
			System.out.println("Please enter more than one argument");
		}
		else{
		for(i=0;i<args.length;i++)
		{
			sum = sum + Integer.parseInt(args[i]);
		}
		System.out.println("Addition of number is:" +sum);
		}
	}
}