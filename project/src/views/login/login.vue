<template>
	<div class="container w3layouts agileits">

		<div class="login w3layouts agileits">
			<h2>Sign In</h2>
			<form action="#" method="post">
				<input type="text" Name="Userame" placeholder="Username" required="">
				<input type="password" Name="Password" placeholder="Password" required="">
			</form>
			<ul class="tick w3layouts agileits">
				<li>
					<input type="checkbox" id="brand1" value="">
					<label for="brand1"><span></span>记住我</label>
				</li>
			</ul>
			<div class="send-button w3layouts agileits">
				<form>
					<input type="submit" value="Sign In">
				</form>
			</div>
			<a href="#">忘记密码?</a>
			
			<div class="clear"></div>
		</div>
		<div class="register w3layouts agileits">
			<h2>Sign Up</h2>
			<form action="#" method="post">
				<input type="text" Name="Name" placeholder="Name" required="">
				<input type="text" Name="Email" placeholder="Email" required="">
				<input type="password" Name="Password" placeholder="Password" required="">
				<input type="text" Name="Phone Number" placeholder="Phone Number" required="">
			</form>
			<div class="send-button w3layouts agileits">
				<form>
					<input type="submit" value="Sign Up">
				</form>
			</div>
			<div class="clear"></div>
		</div>
		<div class="clear"></div>
	</div>
</template>