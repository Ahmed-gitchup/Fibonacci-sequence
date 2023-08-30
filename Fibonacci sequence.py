def fibonacci(n):
    sequence = [0, 1]  # Initialize the sequence with the first two numbers
    while len(sequence) < n:
        next_num = sequence[-1] + sequence[-2]  # Calculate the next number in the sequence
        sequence.append(next_num)  # Add the next number to the sequence
    return sequence

# Example usage
n = int(input("Enter the number of Fibonacci numbers to generate: "))
fib_seq = fibonacci(n)
print(fib_seq)
####################################################################
def fibonacci_python(n):
    sequence = [0, 1]  # Initialize the sequence with the first two numbers
    while len(sequence) < n:
        next_num = sequence[-1] + sequence[-2]  # Calculate the next number in the sequence
        sequence.append(next_num)  # Add the next number to the sequence
    return sequence

# Example usage in Python
n = int(input("Enter the number of Fibonacci numbers to generate: "))
fib_seq_python = fibonacci_python(n)
print(fib_seq_python)