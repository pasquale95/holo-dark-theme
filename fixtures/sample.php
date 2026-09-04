<?php
declare(strict_types=1);

namespace App\Service;

use App\Contracts\Repository;

final class UserService
{
    private const MAX_AGE = 100;

    public function __construct(private Repository $repo) {}

    public function find(int $id): ?array
    {
        $user = $this->repo->find($id);
        if ($user === null || $user['age'] > self::MAX_AGE) {
            return null;
        }
        return [...$user, 'adult' => $user['age'] >= 18];
    }
}

// Line comment
# Hash comment
/* Block comment */
/**
 * Docblock comment
 */
