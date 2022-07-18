import { parse } from 'yaml';
import { join } from 'path';
import { readFileSync } from 'fs';
import { merge } from 'lodash';

// 获取项目运行环境
export const getEnv = () => {
  return process.env.RUNNING_ENV;
};

// 读取项目配置
export const getConfig = () => {
  const environment = getEnv() || 'dev';
  const yamlPath = join(process.cwd(), `./.config/.${environment}.yaml`);
  const yamlLocalPath = join(
    process.cwd(),
    `./.config/.${environment}.lo1cal.yaml`,
  );
  const file = readFileSync(yamlPath, 'utf8');

  let fileLocal;
  try {
    fileLocal = readFileSync(yamlLocalPath, 'utf8');
  } catch (error) {
    console.warn('未添加local配置文件');
  }
  const config = merge({}, parse(file), fileLocal && parse(fileLocal));

  return config;
};
