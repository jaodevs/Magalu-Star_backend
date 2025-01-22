import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FakeStoreService } from './fake-store.service';
import { FakeStoreController } from './fake-store.controller';

@Module({
  imports: [HttpModule],
  providers: [FakeStoreService],
  controllers: [FakeStoreController],
})
export class FakeStoreModule {}
