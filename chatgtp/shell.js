async function system(cmd) {
  let args = cmd.split(' ');
  let process = Deno.run({ cmd: args, stdout: "piped", stderr: "piped" });
  let output = await process.output();
  let errorOutput = await process.stderrOutput();
  process.close();

  let decoder = new TextDecoder();
  let result = decoder.decode(output);
  let error = decoder.decode(errorOutput);

  console.log(result);
  console.error(error);
}

while (true) {
  let cmd = prompt("shell>"); // 这里需要在 Deno 环境中运行，例如使用 deno run --allow-env <filename>.js
  if (cmd === 'exit') break;
  await system(cmd);
}