import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputField from './InputField';
import PrimaryButton from './PrimaryButton';
import LinkText from './LinkText';

const LoginCard: React.FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (!username || !password) {
      console.error('Username and password are required.');
      // In a real app, set an error state here to display to the user
      setIsLoading(false);
      return;
    }

    console.log('Attempting to log in with:', { username, password });
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login successful');
      // Handle successful login (e.g., redirect, update auth context)
      // For now, just clear fields as an example
      setUsername('');
      setPassword('');
    } catch (err) {
      console.error('Login failed:', err);
      // In a real app, set an error state here, e.g. setError('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  }, [username, password]);

  return (
    <Card className={cn(
      'w-full max-w-sm',
      'bg-card text-card-foreground',
      'rounded-lg shadow-lg'
    )}>
      <CardHeader className="p-6">
        <CardTitle className="text-3xl font-bold text-card-foreground">
          Log in
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <form onSubmit={handleLogin} className="space-y-4">
          <InputField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            autoComplete="username"
            disabled={isLoading}
            containerClassName="gap-2" 
          />
          
          <InputField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            disabled={isLoading}
            containerClassName="gap-2"
          />
          
          <PrimaryButton type="submit" disabled={isLoading || !username || !password}>
            {isLoading ? 'Logging in...' : 'Log in'}
          </PrimaryButton>
          
          <div className="text-center pt-2"> {/* Added pt-2 for a bit more space if needed visually */} 
            <LinkText onClick={() => console.log('Sign up clicked')}>
              or, sign up
            </LinkText>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
