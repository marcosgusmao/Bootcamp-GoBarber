interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'marcosgusmao@sideeventos.com.br',
      Name: 'Equipe GoBarber',
    },
  },
} as IMailConfig;
