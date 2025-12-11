import path from "path";
import {
  APIFunction,
  FunctionDescriptor,
  Codex,
  TestGenerator,
  MochaValidator,
  BaseTestResultCollector,
} from "./testpilot-main/src";

(async () => {
  console.log("=== TestPilot Test Generation ===\n");

  // Initialize the LLM model
  const model = new Codex(false, {
    n: 5, // Generate 5 test variations
    max_tokens: 150,
    temperature: 0.7,
  });

  // Setup validator and collector
  const packagePath = path.resolve(__dirname); // Current directory
  const validator = new MochaValidator("js_code", packagePath);
  const collector = new BaseTestResultCollector();

  const temperatures = [0.7];

  // ============================================
  // 1. Triangle Function
  // ============================================
  console.log("1. Generating tests for triangle()...");

  const triangleDescriptor: FunctionDescriptor = {
    type: "function",
    signature: "(s1: number, s2: number, s3: number): string",
    isAsync: false,
    implementation: `
function triangle(s1, s2, s3) {
    if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
        return Triangle.INVALID;
    }
    if (s1 + s2 <= s3 || s2 + s3 <= s1 || s1 + s3 <= s2) {
        return Triangle.INVALID;
    }
    if (s1 === s2 && s2 === s3) {
        return Triangle.EQUILATERAL;
    }
    if ((s1 === s3) || (s2 === s3) || (s1 === s3)) {
        return Triangle.ISOSCELES;
    }
    return Triangle.SCALENE;
}
    `,
    isConstructor: false,
    docComment:
      "Determines the type of triangle based on three side lengths. Returns INVALID if sides don't form a valid triangle, EQUILATERAL if all sides are equal, ISOSCELES if two sides are equal, or SCALENE if all sides are different.",
  };

  const triangleFunction = new APIFunction(
    "triangle",
    triangleDescriptor,
    "js_code"
  );

  const triangleSnippets = new Map([
    [
      "triangle",
      [
        "triangle(3, 3, 3)", // Equilateral
        "triangle(3, 3, 5)", // Isosceles
        "triangle(3, 4, 5)", // Scalene
        "triangle(1, 2, 10)", // Invalid
      ],
    ],
  ]);

  const triangleGenerator = new TestGenerator(
    temperatures,
    (fn) => triangleSnippets.get(fn),
    model,
    validator,
    collector
  );

  await triangleGenerator.generateAndValidateTests(triangleFunction);
  console.log("✓ Triangle tests generated\n");

  // ============================================
  // 2. isPrime Function
  // ============================================
  console.log("2. Generating tests for isPrime()...");

  const isPrimeDescriptor: FunctionDescriptor = {
    type: "function",
    signature: "(num: number): boolean",
    isAsync: false,
    implementation: `
function isPrime(num) {
    if (num < 1) {
        return false;
    }
    if (num === 2 || num === 3 || num === 7) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0 || num % 6 === 0) {
        return false;
    }
    if (num > 5 && num % 5 === 0) {
        return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
    `,
    isConstructor: false,
    docComment:
      "Checks if a number is prime. Returns true if the number is prime, false otherwise.",
  };

  const isPrimeFunction = new APIFunction(
    "isPrime",
    isPrimeDescriptor,
    "js_code"
  );

  const isPrimeSnippets = new Map([
    [
      "isPrime",
      [
        "isPrime(2)", // Prime
        "isPrime(17)", // Prime
        "isPrime(4)", // Not prime
        "isPrime(1)", // Edge case
      ],
    ],
  ]);

  const isPrimeGenerator = new TestGenerator(
    temperatures,
    (fn) => isPrimeSnippets.get(fn),
    model,
    validator,
    collector
  );

  await isPrimeGenerator.generateAndValidateTests(isPrimeFunction);
  console.log("✓ isPrime tests generated\n");

  // ============================================
  // 3. findPrimes Function
  // ============================================
  console.log("3. Generating tests for findPrimes()...");

  const findPrimesDescriptor: FunctionDescriptor = {
    type: "function",
    signature: "(lowerBound: number, upperBound: number): number[]",
    isAsync: false,
    implementation: `
function findPrimes(lowerBound, upperBound) {
    const primeNumbers = [];
    for (let number = lowerBound; number < upperBound; number++) {
        if (isPrime(number)) {
            primeNumbers.push(number);
        }
    }
    return primeNumbers;
}
    `,
    isConstructor: false,
    docComment:
      "Finds all prime numbers in the range [lowerBound, upperBound). Returns an array of prime numbers.",
  };

  const findPrimesFunction = new APIFunction(
    "findPrimes",
    findPrimesDescriptor,
    "js_code"
  );

  const findPrimesSnippets = new Map([
    [
      "findPrimes",
      [
        "findPrimes(1, 10)", // [2, 3, 5, 7]
        "findPrimes(10, 20)", // [11, 13, 17, 19]
      ],
    ],
  ]);

  const findPrimesGenerator = new TestGenerator(
    temperatures,
    (fn) => findPrimesSnippets.get(fn),
    model,
    validator,
    collector
  );

  await findPrimesGenerator.generateAndValidateTests(findPrimesFunction);
  console.log("✓ findPrimes tests generated\n");

  // ============================================
  // 4. computeSumOfPrimes Function
  // ============================================
  console.log("4. Generating tests for computeSumOfPrimes()...");

  const computeSumDescriptor: FunctionDescriptor = {
    type: "function",
    signature: "(primes: number[]): number",
    isAsync: false,
    implementation: `
function computeSumOfPrimes(primes) {
    let sum = 0;
    if (primes.length > 1) {
        for (const prime of primes) {
            sum += prime;
        }
    } else {
        sum = primes[0];
    }
    return sum;
}
    `,
    isConstructor: false,
    docComment:
      "Computes the sum of an array of prime numbers. Returns the sum of all primes in the array.",
  };

  const computeSumFunction = new APIFunction(
    "computeSumOfPrimes",
    computeSumDescriptor,
    "js_code"
  );

  const computeSumSnippets = new Map([
    [
      "computeSumOfPrimes",
      [
        "computeSumOfPrimes([2, 3, 5, 7])", // 17
        "computeSumOfPrimes([11])", // 11
      ],
    ],
  ]);

  const computeSumGenerator = new TestGenerator(
    temperatures,
    (fn) => computeSumSnippets.get(fn),
    model,
    validator,
    collector
  );

  await computeSumGenerator.generateAndValidateTests(computeSumFunction);
  console.log("✓ computeSumOfPrimes tests generated\n");

  // ============================================
  // Collect and Display Results
  // ============================================
  console.log("\n=== Test Generation Summary ===");
  const testInfos = collector.getTestInfos();

  console.log(`\nTotal tests generated: ${testInfos.length}`);
  console.log("\nDetailed Results:");

  testInfos.forEach((test, index) => {
    console.log(`\n${index + 1}. Test ID: ${test.id}`);
    console.log(`   Function: ${test.testName}`);
    console.log(`   Status: ${test.outcome.status}`);
    if (test.outcome.status === "FAILED") {
      console.log(`   Error: ${test.outcome.error}`);
    }
  });

  // Summary statistics
  const passed = testInfos.filter((t) => t.outcome.status === "PASSED").length;
  const failed = testInfos.filter((t) => t.outcome.status === "FAILED").length;

  console.log(`\n=== Statistics ===`);
  console.log(`✓ Passed: ${passed}`);
  console.log(`✗ Failed: ${failed}`);
  console.log(`Total: ${testInfos.length}`);
})();
