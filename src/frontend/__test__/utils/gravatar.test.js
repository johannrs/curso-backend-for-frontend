import gravatar from '../../utils/gravatar';

test ('Gravatar Function test', () => {
    const email = 'guambito@gmail.com';
    const gravatarUrl = 'https://gravatar.com/avatar/d107a4b1a93d178d8662eb138af86072';
    expect(gravatarUrl).toEqual(gravatar(email));
})