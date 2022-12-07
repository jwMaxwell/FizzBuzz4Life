.data
fizz:  .asciiz "Fizz\n"
buzz:  .asciiz "Buzz\n"
fizzbuzz:  .asciiz "FizzBuzz\n"
newline:  .asciiz "\n"

.text
.globl main

main:
li $s0, 1
li $s1, 3
li $s2, 5
li $s3, 15
li $s4, 101

loop:
beq $s0, $s4, quit

div $s0, $s3
mfhi $t0
beq $t0, $zero, printFB

div $s0, $s1
mfhi $t0
beq $t0, $zero, printFizz

div $s0, $s2
mfhi $t0
beq $t0, $zero, printBuzz

j printNum

printFizz:
la $a0, fizz
li $v0, 4
syscall
addi $s0 $s0 1
j loop

printBuzz:
la $a0, buzz
li $v0, 4
syscall
addi $s0 $s0 1
j loop

printFB:
la $a0, fizzbuzz
li $v0, 4
syscall
addi $s0 $s0 1
j loop

printNum:
li $v0, 1
move $a0, $s0
syscall
la $a0, newline
li $v0, 4
syscall
addi $s0 $s0 1
j loop

quit:
li $v0, 0
jr $ra
  