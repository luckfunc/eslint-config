import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			quotes: ['error', 'single'], // 强制使用单引号
			'jsx-quotes': ['error', 'prefer-single'], // jsx属性 强制使用单引号
			'comma-dangle': ['error', 'never'], // 禁止对象、数组、函数参数等的尾随逗号
			'no-multi-spaces': ['error'], // 禁止多个连续空格
			indent: ['error', 2, { SwitchCase: 1 }] // 缩进2个空格
		}
	}
];

export default eslintConfig;
